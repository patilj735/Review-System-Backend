import user from "../models/user.js";

export const createAdmin=async(req,res)=>{
    const {name,email,password}=req.body;

    try {
        const users = new user({
            name,
            email,
            password,
            role:"Admin"
        })
        
        const savedusers=await users.save();
        res.json({
            savedusers,
            message:"User created successfully"
        })
    } catch (error) {
        res.json({
            error:"Error Occured"
        })
    }
};

export const createAlumni=async(req,res)=>{
    const {name,email,password}=req.body;

    try {
        const users2 = new user({
            name,
            email,
            password,
            role:"Alumni"
        })
        
        const savedusers=await users2.save();
        res.json({
            savedusers,
            message:"User created successfully"
        })
    } catch (error) {
        res.json({
            error:"Error Occured"
        })
    }
};

export const createStudent=async(req,res)=>{
    const {name,email,password}=req.body;

    try {
        const users3 = new user({
            name,
            email,
            password,
            role:"Student"
        })
        
        const savedusers=await users3.save();
        res.json({
            savedusers,
            message:"User created successfully"
        })
    } catch (error) {
        res.json({
            error:"Error Occured"
        })
    }
};

export const getAllUsers=async(req,res)=>{
    try {
        const getusers=await user.find()
        res.json({
            getusers
    })
    } catch(error){
        res.json({
            error:"Cannot fetch data"
    })
        console.log(error);
        
    }
}
