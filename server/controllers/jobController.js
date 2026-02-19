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

// get all jobs
export const getJobs = async (req, res, next) => {
  const jobs = await Job.find({ visible: true }).populate(
    "createdBy",
    "name image",
  );

  res.status(200).json({
    success: true,
    jobs,
  });
};

// get job by id
export const getJobById = async (req, res, next) => {
  const { id } = req.params;

  const job = await Job.findById(id).populate("createdBy", "name image");

  if (!job) {
    return next(new ErrorHandler("Job not found", 404));
  }

  res.status(200).json({
    success: true,
    job,
  });
};

export const getRecruiterJobs = async (req, res, next) => {
  const recruiterId = req.user._id;

  // Recruiter ke saare jobs
  const jobs = await Job.find({ createdBy: recruiterId });

  res.status(200).json({
    success: true,
    jobs,
  });
};

// Toggle visible checkbox
export const toggleJobVisibility = async (req, res, next) => {
  const { id } = req.params;

  const job = await Job.findById(id);

  if (!job) {
    return next(new ErrorHandler("Job not found", 404));
  }

  if (job.createdBy.toString() !== req.user._id.toString()) {
    return next(new ErrorHandler("Not authorized to modify this job", 403));
  }

  // 🔄 Toggle visibility
  job.visible = !job.visible;

  await job.save();

  res.status(200).json({
    success: true,
    message: `Job is now ${job.visible ? "visible" : "hidden"}`,
    visible: job.visible,
  });
};
