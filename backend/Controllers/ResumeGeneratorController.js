import puppeteer from "puppeteer"
const htmlToPdfBuffer = async (htmlContent) => {
    const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
});
    const page = await browser.newPage();
    await page.setContent(htmlContent);
    const pdfBuffer = await page.pdf({ format: "A4" });
    await browser.close();
    return pdfBuffer;
};
const ResumeGenerator=async(req,res)=>{
    const GROQ_API_KEY=process.env.GROQ_API_KEY;
    try {
        const {sections,information,template}=req.body;
        const response=await fetch("https://api.groq.com/openai/v1/chat/completions",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${GROQ_API_KEY}`
            },
            body:JSON.stringify({
                model:"llama-3.1-8b-instant",
                messages:[
                    {role:"system",content:"You are an Resume Generator.I have given you the field which you have to add in the resume and the data as well Generate the resume and give me in the pdf form.If the the data don't have the section then don't include it in the resume.Stricty follow the template"},
                    {role:"user",content:`The data is
                        sections:${sections}
                        information:${information}
                        template:${template}
                        `}
                ]
            })
        })
        const data=await response.json();
        if (!data.choices || !data.choices[0] || !data.choices[0].message || !data.choices[0].message.content) {
    return res.json({success:false,message:"Invalid response from Groq API", data});
}
const htmlContent = data.choices[0].message.content;
const pdfBuffer = await htmlToPdfBuffer(htmlContent);
return res.json({success:true,pdf:pdfBuffer.toString("base64"),message:"Resume Generated Successfully"});
    } catch (error) {
        console.log(error);
        return res.json({success:false,message:error.message});
    }
}
export default ResumeGenerator;