import ATSScoreGenerator from "../Controllers/ATSScoreGeneratorController.js";
import express from "express";
import multer from "multer";
const upload=multer();
const ATSScore=express.Router();
ATSScore.post("/fetch-ats-score",upload.single("resume"),ATSScoreGenerator);
export default ATSScore;