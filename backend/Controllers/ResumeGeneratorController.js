import puppeteer from "puppeteer";

const htmlToPdfBuffer = async (htmlContent) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
  const pdfBuffer = await page.pdf({
  format: 'A4',
});
  await browser.close();
  return pdfBuffer;
};

const ResumeGenerator = async (req, res) => {
  const GROQ_API_KEY = process.env.GROQ_API_KEY;

  try {
    const { sections, information} = req.body;

    // Call Groq API
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
  {
    role: "system",
    content: `You are an expert resume generator. 
I will give you candidate information as JSON.
Generate a simple, professional, ATS-friendly resume in fully rendered HTML.
Use proper HTML tags: <html>, <head>, <body>, <h1>, <h2>, <p>, <ul>, <li>, etc.
Include inline CSS in <style> in <head>:
- Font: Arial, 11px
- Line height: 1.2
- Margins: 20px
- Headings smaller, lists compact
- Ensure content fits on a **single page** A4 PDF.
Do not use Markdown, template tags, or any other syntax.
Only include sections that have data.
You can use bullet points.Make the resume attractive to the recruiter.Make the resume fit to the full page.Don't leave empty spaces.\n
**Important:** Do NOT include any extra text or explanation like:
"1) This HTML code will produce a single-page layout with the given information formatted according to the provided specifications. The layout includes sections for Full Name, Contact Information, Summary, Education, Projects, Skills, Achievements, Extra Curricular Activities, and Social Links. The skills section is formatted differently as per the specifications. The layout is also ATS-friendly and can be converted to a single-page PDF easily."
Do not include any description, notes, or instructions in the output. Only provide the HTML code for the resume Strictly.
`
  },
  {
    role: "user",
    content: `Data:
      sections: ${JSON.stringify(sections)}
      information: ${JSON.stringify(information)}
      `
  }
]
      })
    });

    // Read response as text
    const text = await response.text();
    let data;

    try {
      data = JSON.parse(text); // Try parsing
    } catch (err) {
      console.log("API did not return valid JSON:", text);
      return res.json({ success: false, message: "Groq API returned invalid JSON", raw: text });
    }

    // Validate response
    if (!data.choices || !data.choices[0] || !data.choices[0].message || !data.choices[0].message.content) {
      return res.json({ success: false, message: "Invalid response from Groq API", data });
    }

    const htmlContent = data.choices[0].message.content;

    // Convert HTML to PDF
    const pdfBuffer = await htmlToPdfBuffer(htmlContent);

    // Safe Base64
    const pdfBase64 = Buffer.from(pdfBuffer).toString('base64');

    return res.json({
      success: true,
      pdf: pdfBase64,
      message: "Resume Generated Successfully"
    });

  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};


export default ResumeGenerator;
