import UserModel from "../models/user.js";

export const isAdmin=async(req,res,next)=>{
    try {
        const {email}=req.body;
        const userinfo=await UserModel.findOne({email})

        if(userinfo && userinfo.role=="Admin"){
            next();
        }
        else {
            res.status(403).json({
                message:"Access denied,only admin can access"
            })
        }
    } catch (error) {
        res.status(500).json({
            message:"Error occured"
        })
    }
}


export const isAlumni=async(req,res,next)=>{
    try {
        const {email}=req.body;
        const userinfo=await UserModel.findOne({email})

        if(userinfo && userinfo.role=="Alumni"){
            next();
        }
        else {
            res.status(403).json({
                message:"Access denied,only admin can access"
            })
        }
    } catch (error) {
        res.status(500).json({
            message:"Error occured"
        })
    }
}

export const isStudent=async(req,res,next)=>{
    try {
        const {email}=req.body;
        const userinfo=await UserModel.findOne({email})

        if(userinfo && userinfo.role=="Student"){
            next();
        }
        else {
            res.status(403).json({
                message:"Access denied,only admin can access"
            })
        }
    } catch (error) {
        res.status(500).json({
            message:"Error occured"
        })
    }
}