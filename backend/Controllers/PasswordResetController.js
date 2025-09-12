import userModel from "../models/UserModel.js";
import passwordResetModel from "../models/passwordResetModel.js";
import nodemailer from "nodemailer";
const passwordResetController=async(req,res)=>{
    const {email}=req.body;
    try {
        const normalizedEmail=email.toLowerCase();
        const user=await userModel.findOne({email:normalizedEmail});
        if(!user){
            return res.json({success:false,message:"User doesn't exist"});
        }
        if(user.authType==="google"){
            return res.json({success:false,message:"Please sign in using Google Sign In"});
        }
            const otp=Math.floor(Math.random()*(9999-1000+1)+1000);
            const newUser=new passwordResetModel({
                email:normalizedEmail,
                resetOTP:otp,
                resetOTPExpiry:new Date()
            })
            await newUser.save();
            const transporter=nodemailer.createTransport({
                service:"gmail",
                auth:{user:process.env.EMAIL_USER,pass:process.env.EMAIL_PASS}
            });
            await transporter.sendMail({
                to:email,
                subject:"ResuMateAI Password Reset OTP",
                html:`<p>Your OTP is <b>${otp}</b>.It will expire in 10 minutes</p>`
            });
            return res.json({success:true,message:"OTP sent to your mail"});
    } catch (error) {
        console.log(error);
        return res.json({success:false,message:error.message});
    }
}
export default passwordResetController;