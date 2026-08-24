import ErrorHandler from "../utils/errorHandler.js";

import {
  createJobDB,
  getAllJobsDB,
  getJobByIdDB,
  getRecruiterJobsDB,
  toggleJobVisibilityDB,
} from "../models/jobModel.js";

// Post a new job
export const postJob = async (req, res, next) => {
  const { title, location, level, description, salary, category, visible } =
    req.body;

  // validation
  if (!title || !location || !level || !description || !salary || !category) {
    return next(new ErrorHandler("Please fill all required fields", 400));
  }

  // Create job
  const job = await createJobDB({
    title,
    location,
    level,
    description,
    salary,
    category,
    visible: visible ?? true,
    createdBy: req.user.id,
  });

  res.status(201).json({
    success: true,
    message: "Job posted successfully",
    job,
  });
};

// get all jobs
export const getJobs = async (req, res, next) => {
  const jobs = await getAllJobsDB();

  res.status(200).json({
    success: true,
    jobs,
  });
};

// get job by id
export const getJobById = async (req, res, next) => {
  const { jobId } = req.params;

  const job = await getJobByIdDB(jobId);

  if (!job) {
    return next(new ErrorHandler("Job not found", 404));
  }

  res.status(200).json({
    success: true,
    job,
  });
};

export const getRecruiterJobs = async (req, res, next) => {
  const recruiterId = req.user.id;

  const jobs = await getRecruiterJobsDB(recruiterId);

  res.status(200).json({
    success: true,
    jobs,
  });
};

// Toggle visible checkbox
export const toggleJobVisibility = async (req, res, next) => {
  const { jobId } = req.params;

  const job = await toggleJobVisibilityDB(jobId, req.user.id);

  if (!job) {
    return next(
      new ErrorHandler(
        "Job not found or you are not authorized to modify this job",
        403,
      ),
    );
  }

  res.status(200).json({
    success: true,
    message: `Job is now ${job.visible ? "visible" : "hidden"}`,
    visible: job.visible,
  });
};
