import express from "express";
import {
  postJob,
  getJobs,
  getJobById,
  toggleJobVisibility,
  getRecruiterJobs,
} from "../controllers/jobController.js";
import isLoggedIn from "../middleware/isLoggedIn.js";

const router = express.Router();

// get all jobs
router.get("/", getJobs);

// post new job
router.post("/", isLoggedIn, postJob);

// recruiter jobs for manage jobs page
router.get("/recruiter/jobs", isLoggedIn, getRecruiterJobs);

// toggle visibility
router.patch("/:id/toggle-visibility", isLoggedIn, toggleJobVisibility);

// get single job
router.get("/:id", getJobById);


export default router;
