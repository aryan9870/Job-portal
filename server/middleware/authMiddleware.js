import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/errorHandler.js";

import { findUserById } from "../models/userModel.js";

// Check if logged in
export const isLoggedIn = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("You must be logged in", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await findUserById(decoded.id);

    if (!user) {
      return next(new ErrorHandler("User not found", 401));
    }

    req.user = user;
    next();
  } catch (err) {
    return next(new ErrorHandler("Invalid or expired token", 401));
  }
};

// Check if recruiter
export const isRecruiter = (req, res, next) => {
  if (req.user.role !== "recruiter") {
    return next(new ErrorHandler("Access denied. Recruiter only.", 403));
  }
  next();
};

// check if applicant
export const isApplicant = (req, res, next) => {
  if (req.user.role !== "applicant") {
    return next(new ErrorHandler("Access denied. Applicant only.", 403));
  }
  next();
};
