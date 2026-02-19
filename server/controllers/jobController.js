import Job from "../models/jobModel.js";
import ErrorHandler from "../utils/errorHandler.js";

// Post a new job
export const postJob = async (req, res, next) => {
  const { title, location, level, description, salary, category, visible } =
    req.body;

  // validation
  if (!title || !location || !level || !description || !salary || !category) {
    return next(new ErrorHandler("Please fill all required fields", 400));
  }

  // Create job
  const job = await Job.create({
    title,
    location,
    level,
    description,
    salary,
    category,
    visible: visible ?? true, // default true if not provided
    createdBy: req.user._id, // auth middleware sets req.user
  });

  res.status(201).json({
    success: true,
    message: "Job posted successfully",
    job,
  });
};



