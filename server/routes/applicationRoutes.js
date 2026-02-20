import express from "express";
import { isLoggedIn, isApplicant, isRecruiter } from "../middleware/authMiddleware.js";
import { applyForJob, getUserJobApplications, getRecruiterApplications, changeApplicationStatus } from "../controllers/applicationController.js";

const router = express.Router();



// Get applied data || applicant POV
router.get("/", isLoggedIn, isApplicant, getUserJobApplications);

// Get applications data || recruiter POV
router.get("/recruiter", isLoggedIn, isRecruiter, getRecruiterApplications);

// Apply for a job
router.post("/:jobId", isLoggedIn, isApplicant, applyForJob);


// Change application status 
router.patch("/:applicationId", isLoggedIn, isRecruiter, changeApplicationStatus);

export default router;
