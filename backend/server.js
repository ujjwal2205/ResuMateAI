import express from "express"
import cors from "cors"
import connectDB from "./config/db.js";
import 'dotenv/config';
import userRouter from "./Routes/UserRoute.js";
const app=express();
const port=4000

app.use(express.json())
app.use(cors())
app.use("/api/user",userRouter);
connectDB();
app.get("/",(req,res)=>{
res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})