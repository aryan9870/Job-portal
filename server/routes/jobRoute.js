import express from "express";
import {
  postJob,
  getJobs,
  getJobById,
  toggleJobVisibility,
  getRecruiterJobs,
} from "../controllers/jobController.js";
import { isLoggedIn, isRecruiter } from "../middleware/authMiddleware.js";

const router = express.Router();

// get all jobs
router.get("/", getJobs);

// post new job
router.post("/", isLoggedIn, isRecruiter, postJob);

// recruiter jobs for manage jobs page
router.get("/recruiter", isLoggedIn, isRecruiter, getRecruiterJobs);

// toggle visibility
router.patch("/:jobId", isLoggedIn, isRecruiter, toggleJobVisibility);

// get single job
router.get("/:jobId", getJobById);


export default router;
