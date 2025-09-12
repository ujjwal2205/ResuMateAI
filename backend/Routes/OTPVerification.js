import OTPVerification from "../Controllers/OTPVerificationController.js";
import express from "express";
const Verification=express.Router();
Verification.post("/verification",OTPVerification);
export default Verification;