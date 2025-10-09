import express from "express"
import ResumeGenerator from "../Controllers/ResumeGeneratorController.js"
const ResumeRouter=express.Router();
ResumeRouter.post("/generator",ResumeGenerator);
export default ResumeRouter;