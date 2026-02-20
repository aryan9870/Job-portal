import Application from "../models/applicationModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import Job from "../models/jobModel.js";

// Apply for a job
export const applyForJob = async (req, res, next) => {
  const userId = req.user._id;
  const jobId = req.params.jobId;

  // Check if job exists
  const job = await Job.findById(jobId);

  if (!job) {
    return next(new ErrorHandler("Job not found", 404));
  }

  // Prevent duplicate application
  const existingApplication = await Application.findOne({
    job: jobId,
    applicant: userId,
  });

  if (existingApplication) {
    return next(new ErrorHandler("You have already applied for this job", 400));
  }

  // Create application
  const application = await Application.create({
    job: jobId,
    applicant: userId,
    status: "pending",
  });

  res.status(201).json({
    success: true,
    message: "Job applied successfully",
    application,
  });
};

// Get logged-in user's applications
export const getUserJobApplications = async (req, res, next) => {
  const userId = req.user._id;

  const applications = await Application.find({ applicant: userId })
    .populate({
      path: "job",
      select: "title location createdBy",
      populate: {
        path: "createdBy",
        select: "name email",
      },
    })
    .select("status createdAt job");

  res.status(200).json({
    success: true,
    applications,
  });
};

// Get applications for logged-in recruiter
export const getRecruiterApplications = async (req, res, next) => {
  const recruiterId = req.user._id;

  // Find jobs created by this recruiter
  const recruiterJobs = await Job.find({ createdBy: recruiterId }).select(
    "_id",
  );

  if (recruiterJobs.length < 1) {
    return res.status(200).json({
      success: true,
      message: "No jobs found for this recruiter",
      applications: [],
    });
  }

  const jobIds = recruiterJobs.map((job) => job._id);

  // Find applications for those jobs
  const applications = await Application.find({ job: { $in: jobIds } })
    .populate("applicant", "name email")
    .populate("job", "title location")

  res.status(200).json({
    success: true,
    applications,
  });
};

// Change application status
export const changeApplicationStatus = async (req, res, next) => {
  const { applicationId } = req.params;
  const { status } = req.body;

  // Validate status
  const allowedStatus = ["pending", "accepted", "rejected"];

  if (!status || !allowedStatus.includes(status)) {
    return next(new ErrorHandler("Invalid or missing status value", 400));
  }

  // Find application
  const application = await Application.findById(applicationId).populate("job");

  if (!application) {
    return next(new ErrorHandler("Application not found", 404));
  }

  // Check recruiter owns the job
  if (application.job.createdBy.toString() !== req.user._id.toString()) {
    return next(
      new ErrorHandler(
        "You can only update applications for your own jobs",
        403,
      ),
    );
  }

  // Update status
  application.status = status;
  await application.save();

  res.status(200).json({
    success: true,
    message: "Application status updated successfully",
    application,
  });
};
