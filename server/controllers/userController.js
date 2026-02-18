import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/errorHandler.js";

export const registerUser = async (req, res, next) => {
  // Extract user details from request body
  const { name, email, password, role } = req.body;

  // Validate input
  if (!name || !email || !password) {
    return next(
      new ErrorHandler("name, email, and password are required", 400),
    );
  }

  // Check if user with the same email or username already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return next(new ErrorHandler("User with this email already exists", 400));
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    role,
  });

  await newUser.save();

  // Generate JWT token
  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  // send response with token in cookie
  res
    .status(201)
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })
    .json({
      success: true,
      message: "User registered successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
};

export const loginUser = async (req, res, next) => {
  // Extract login details from request body
  const { email, password, role } = req.body;

  // Validate input
  if (!email || !password) {
    return next(new ErrorHandler("Email and password are required", 400));
  }

  // Check if user with the provided email exists
  const user = await User.findOne({ email });
  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 400));
  }

  // Role validation
  if (user.role !== role) {
    return next(new ErrorHandler("Please login using the correct account type", 400));
  }

  // Compare provided password with the hashed password in the database
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return next(new ErrorHandler("Invalid email or password", 400));
  }

  // Generate JWT token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  // send response with token in cookie
  res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })
    .json({
      success: true,
      message: "User logged in successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
};

export const logoutUser = async (req, res, next) => {
  res
    .clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    })
    .json({
      success: true,
      message: "User logged out successfully",
    });
};

export const isAuthenticated = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "You are allredy logged in",
    user: req.user,
  })
} 