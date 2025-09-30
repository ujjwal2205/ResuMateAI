import pdf from "pdf-parse";
const QuestionsGeneratorController=async(req,res)=>{
    const GROQ_API_KEY=process.env.GROQ_API_KEY;
    const dataBuffer=req.file.buffer;
    const parsed=await pdf(dataBuffer);
    const resumeText=parsed.text;
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
                    {role:"user",content:`Analyse this resume and give the important questions and expected answers regarding the projects,skills and general important interview questions:\n
                        Resume:${resumeText}\n
                        Return JSON only in this format.\n
                        {
                        "resumeQnA":[
                        {
                        question: "...",
                        answer:"..."
                        }
                        {
                        question: "...",
                        answer:"..."
                        }
                        {
                        question:"...",
                        answer:"..."}
                        ]
                        }\n
                        NOTES:\n
                        1) Give me json file strictly in this format and strictly give me atleast 10 questions  .
                        `
                    }
                ]
            })
        })
        const data=await response.json();
        if(!data.choices || !data.choices[0] || !data.choices[0].message){
            return res.json({success:false,message:"Invalid response from Groq API",data:data})
        }
        const rawContent=data.choices[0].message.content.trim();
        const cleaned=rawContent.replace(/```json|```/g, "");
        const atsResult=JSON.parse(cleaned);
        return res.json({success:true,data:atsResult,message:"Questions Generated Successfully!"});
    } catch (error) {
        console.log(error);
        return res.json({success:false,message:error.message});
    }
}
export default QuestionsGeneratorController;