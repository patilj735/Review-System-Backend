import companyModel from "../models/Company.js";

export const createCompany=async(req,res)=>{
    const {name,location,industry,email}=req.body;

    try {
        const companyObj = new companyModel({
            name,
            location,
            industry,
            email
        })
        
        const savedCompanyObj=await companyObj.save();
        res.json({
            savedCompanyObj,
            message:"Company created successfully"
        })
    } catch (error) {
        res.json({
            //console.log(error);
            error:"Error Occured"
        })
    }
};

export const getCompanies=async(req,res)=>{
    try {
      const getcompanies=await companyModel.find()
      res.json({
        getcompanies
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }
