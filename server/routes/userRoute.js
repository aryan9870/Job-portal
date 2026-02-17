import express from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/userController.js";
import isLoggedIn from "../middleware/isLoggedIn.js";
const router = express.Router();

// Register
router.post("/register", registerUser);

// Login 
router.post("/login", loginUser);

// Logout
router.get("/logout",isLoggedIn, logoutUser);


export default router;
