import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import ErrorHandler from "./utils/errorHandler.js";
import userRouter from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import jobRouter from "./routes/jobRoute.js"

dotenv.config();

connectDB();

const app = express();

// Middleware
const allowedOrigins = ['http://localhost:5173']

app.use(cors({origin: allowedOrigins, credentials: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
  });
});


app.use("/user", userRouter);
app.use("/job", jobRouter);


// Route not found 
app.use((req, res, next) => {
  return next(new ErrorHandler(`Route ${req.originalUrl} not found`, 404));
});


// Error handler middleware
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message
  });
});


// Server Listen
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
