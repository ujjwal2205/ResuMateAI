import QuestionsGeneratorController from "../Controllers/QuestionsGeneratorController.js";
import multer from "multer";
import express from "express";
const upload=multer();
const Questions=express.Router();
Questions.post("/fetch-questions",upload.single("resume"),QuestionsGeneratorController);
export default Questions;