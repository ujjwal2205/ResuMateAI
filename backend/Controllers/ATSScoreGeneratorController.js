import pdf from "pdf-parse"
const ATSScoreGenerator=async(req,res)=>{
const GROQ_API_KEY=process.env.GROQ_API_KEY;
const dataBuffer=req.file.buffer;
const parsed=await pdf(dataBuffer);
const resumeText=parsed.text;
const {jobTitle}=req.body;
try {
    const response=await fetch("https://api.groq.com/openai/v1/chat/completions",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${GROQ_API_KEY}`
        },
        body:JSON.stringify({
            model:"llama-3.1-8b-instant",
            messages:[
                
                    {role:"system",content:"You are an ATS Scoring Assistant.Always return response strictly in JSON only.Never include extra text."},
                    {role:"user",content:`Analyse this resume and give ATS Score with suggestions like structure,keyWords to be add or remove in order to apply the job title,point out the wrong line and how to improve it and general suggestions:\n
                        Resume:${resumeText}\n
                        JobTitle:${jobTitle}\n
                        Calculate ATS Score on the based formula:\n
                        ATS Score = (Keyword_Match * 0.45)
                       + (Experience_Relevance * 0.25)
                       + (Education_Certifications * 0.10)
                       + (Achievements * 0.10)
                        + (Formatting_Readability * 0.10)\n
                        Return JSON only in this format\n
                        {
                        "ats_score":number(0-100),
                        "suggestions":[list of strings],
                        "ats_score_suggestion":string
                        }
                        NOTES:
                        1. "ats_score_suggestion" should give a 1–2 line comment on how good or bad the ATS score is.
                        `}
            ],
        })
    })
    const data=await response.json();
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
    return res.json({success:false,message:"Invalid response from Groq API", data});
}
    const rawContent=data.choices[0].message.content.trim();
    const cleaned = rawContent.replace(/```json|```/g, "");
    const atsResult =JSON.parse(cleaned);
    return res.json({success:true,data:atsResult,message:"ATS Score Generated Successfully"});
} catch (error) {
    console.log(error);
    return res.json({success:false,message:error.message});
}
}
export default ATSScoreGenerator;