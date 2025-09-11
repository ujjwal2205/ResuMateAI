import userModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import express from "express";
import verifyGoogleToken from "../middleware/authGoogle.js";
const createToken=(email)=>{
    return jwt.sign({email:email},process.env.JWT_SECRET);
}
//sign up
const signUpUser=async(req,res)=>{
    const {firstName,middleName,lastName,email,password,confirmPassword}=req.body;
    try {
        const normalizedEmail=email.toLowerCase();
        const exist=await userModel.findOne({email:normalizedEmail});
        //if user already exist
        if(exist){
         return res.json({sucess:false,message:"User already exist"});
        }
        //if email is not valid
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"});
        }
        if(password!==confirmPassword){
            return res.json({success:false,message:"Passwords do not match"});
        }
        if(password.length<8){
            return res.json({success:false,message:"Please enter a strong password"});
        }
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        const newUser=new userModel({
            firstName:firstName,
            middleName:middleName,
            lastName:lastName,
            email:email,
           password:hashedPassword,
           authType:"local" 
        })
        await newUser.save();
        const token=createToken(normalizedEmail);
        res.json({success:true,token});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}
//login
const login=async(req,res)=>{
    const {email,password}=req.body;
    try {
        const normalizedEmail=email.toLowerCase();
        const user=await userModel.findOne({email:normalizedEmail});
        if(!user){
            res.json({success:false,message:"User doesn't exist"});
        }
        if(user.authType==="google"){
            res.json({success:false,message:"Please login via Google Sign-in"});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.json({success:false,message:"Invalid Credentials"});
        }
        const token=createToken(normalizedEmail);
        res.json({success:true,token});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}
//googleLogin
const googleLogin=async(req,res)=>{
    try {
        const {idToken}=req.body;
        const googleUser=await verifyGoogleToken(idToken);
        const {email,given_name,family_name}=googleUser;
        const normalizedEmail=email.toLowerCase();
        let user=await userModel.findOne({email:normalizedEmail});
        if(!user){
            user=new userModel({
                email:normalizedEmail,
                firstName:given_name,
                lastName:family_name||"N/A",
                authType:"google"
            });
            await user.save();
        }
        const token=createToken(normalizedEmail);
        res.json({success:true,token});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}
export {signUpUser,login,googleLogin}