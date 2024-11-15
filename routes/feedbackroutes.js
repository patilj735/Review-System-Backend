import { createAdmin,createAlumni,createStudent,getAllUsers } from "../controllers/userController.js";
import { createCompany } from "../controllers/CompanyControllers.js";
import { getCompanies } from "../controllers/CompanyControllers.js";
import { createReview } from "../controllers/ReviewController.js";
import { getAllReviews } from "../controllers/ReviewController.js";
import { likeReviews } from "../controllers/LikesControllers.js";
import express from "express";
import { isAdmin } from "../middleware/Middleware.js";
import { isAlumni } from "../middleware/Middleware.js";
import { isStudent } from "../middleware/Middleware.js";

const router= express.Router()

router.post("/admin/create",createAdmin) 
router.post("/alumni/create",createAlumni) 
router.post("/student/create",createStudent)  
router.post("/company/create",isAdmin,createCompany)  
router.post("/review/create",isAlumni,createReview)
router.post("/likes/create",isStudent,likeReviews)
router.get("/getcompanies/get",getCompanies)
router.get("/getallusers/get",getAllUsers)
router.get("/getreviews/get",getAllReviews)

export default router;