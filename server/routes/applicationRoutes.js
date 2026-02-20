import express from "express";
import isLoggedIn from "../middleware/isLoggedIn.js";
import { applyForJob, getUserJobApplications, getRecruiterApplications, changeApplicationStatus } from "../controllers/applicationController.js";

const router = express.Router();



// Get applied data || applicant POV
router.get("/", isLoggedIn, getUserJobApplications);

// Get applications data || recruiter POV
router.get("/recruiter", isLoggedIn, getRecruiterApplications);

// Apply for a job
router.post("/:jobId", isLoggedIn, applyForJob);


// Change application status 
router.patch("/:applicationId", isLoggedIn, changeApplicationStatus);

export default router;
