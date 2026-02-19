import express from "express";
import { postJob } from "../controllers/jobController.js";
import isLoggedIn from "../middleware/isLoggedIn.js";

const router = express.Router();

// Post a new job
router.post("/", isLoggedIn, postJob);

export default router;
