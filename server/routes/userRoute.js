import express from "express";
import { registerUser, loginUser, logoutUser, isAuthenticated, uploadUserResume } from "../controllers/userController.js";
import { isApplicant, isLoggedIn } from "../middleware/authMiddleware.js";
import upload from "../middleware/multer.js";
const router = express.Router();

// Register
router.post("/register", upload.single("image"), registerUser);

// Login 
router.post("/login", loginUser); 

// Logout
router.get("/logout",isLoggedIn, logoutUser);

router.get("/is-auth", isLoggedIn, isAuthenticated);

router.post("/resume", isLoggedIn, isApplicant, upload.single("resume"), uploadUserResume);

export default router;
