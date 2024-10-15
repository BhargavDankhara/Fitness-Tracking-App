import express from "express";
import { login, logout, signup } from "../Controllers/authController.js";

const router = express.Router();

// Signup route
router.post("/signup", signup);

// Login route
router.post("/login", login);

router.post("/logout", logout);

export default router;
