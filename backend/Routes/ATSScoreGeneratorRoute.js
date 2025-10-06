import ATSScoreGenerator from "../Controllers/ATSScoreGeneratorController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import express from "express";
import multer from "multer";
const upload=multer();
const ATSScore=express.Router();
ATSScore.post("/fetch-ats-score",upload.single("resume"),authMiddleware,ATSScoreGenerator);
export default ATSScore;