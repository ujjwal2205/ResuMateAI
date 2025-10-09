import express from "express"
import cors from "cors"
import connectDB from "./config/db.js";
import 'dotenv/config';
import userRouter from "./Routes/UserRoute.js";
import passwordReset from "./Routes/passwordResetRoute.js";
import Verification from "./Routes/OTPVerificationRoute.js";
import ATSScore from "./Routes/ATSScoreGeneratorRoute.js";
import Questions from "./Routes/QuestionGeneratorRoute.js";
import ResumeRouter from "./Routes/ResumeGeneratorRoute.js";
const app=express();
const port=4000

app.use(express.json())
app.use(cors())
app.use("/api/user",userRouter);
app.use("/api/forgot-password",passwordReset);
app.use("/api/OTP",Verification);
app.use("/api/ats-score",ATSScore);
app.use("/api/questions",Questions);
app.use("/api/resume",ResumeRouter);
connectDB();
app.get("/",(req,res)=>{
res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})