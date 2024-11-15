import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dbConnect from "./config/database.js";
import user from "./models/user.js";
import router from "./routes/feedbackroutes.js";


const app=express();

const PORT=3000;

app.use(express.json())

//mouting the routes
app.use("/api/v1",router)
dotenv.config();




dbConnect();




app.listen(PORT,()=>{
    console.log(`Server is running at port : ${PORT}`);

})