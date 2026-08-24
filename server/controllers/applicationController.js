import Application from "../models/applicationModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import Job from "../models/jobModel.js";

import {
  getExistingApplicationDB,
  createApplicationDB,
  getUserApplicationsDB,
  getRecruiterApplicationsDB,
  updateApplicationStatusDB
} from "../models/pgApplicationModel.js";

import { getJobByIdDB } from "../models/pgJobModel.js";

// Apply for a job
export const applyForJob = async (req, res, next) => {
  const userId = req.user.id;
  const jobId = req.params.jobId;

  // Check if job exists
  const job = await getJobByIdDB(jobId);

  if (!job) {
    return next(new ErrorHandler("Job not found", 404));
  }

  // Prevent duplicate application
  const existingApplication = await getExistingApplicationDB({
    jobId,
    applicantId: userId,
  });

  if (existingApplication) {
    return next(new ErrorHandler("You have already applied for this job", 400));
  }

  // validate resume
  if (!req.user.resume) {
    return next(
      new ErrorHandler(
        "Please upload your resume befor applying for a job",
        422,
      ),
    );
  }

  // Create application
  const application = await createApplicationDB({
    jobId,
    applicantId: userId,
    status: "pending",
    resume: req.user.resume,
  });

  res.status(201).json({
    success: true,
    message: "Job applied successfully",
    application,
  });
};

// Get logged-in user's applications
export const getUserJobApplications = async (req, res, next) => {
  const userId = req.user.id;

  const applications = await getUserApplicationsDB(userId);

  res.status(200).json({
    success: true,
    applications,
  });
};

// Get applications for logged-in recruiter
export const getRecruiterApplications = async (req, res, next) => {
  const recruiterId = req.user.id;

  const applications = await getRecruiterApplicationsDB(recruiterId);

  res.status(200).json({
    success: true,
    applications,
  });
};

// Change application status
export const changeApplicationStatus = async (req, res, next) => {
  const { applicationId } = req.params;
  const { status } = req.body;
  const recruiterId = req.user.id;

  // Validate status
  const allowedStatus = ["pending", "accepted", "rejected"];

  if (!status || !allowedStatus.includes(status)) {
    return next(
      new ErrorHandler("Invalid or missing status value", 400)
    );
  }

  // Update application
  const application = await updateApplicationStatusDB({
    applicationId,
    status,
    recruiterId,
  });

  if (!application) {
    return next(
      new ErrorHandler(
        "Application not found or you are not authorized",
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    message: "Application status updated successfully",
    application,
  });
};