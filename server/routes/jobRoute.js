import express from "express";
import { postJob, getJobs, getJobById } from "../controllers/jobController.js";
import isLoggedIn from "../middleware/isLoggedIn.js";

const router = express.Router();

// get all jobs
router.get("/", getJobs);

// Post a new job
router.post("/", isLoggedIn, postJob);


// get a single job by ID
router.get("/:id", getJobById);



export default router;
