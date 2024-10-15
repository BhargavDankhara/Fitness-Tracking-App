import express from "express";

import { authenticate } from "../middleware/authMiddleware.js";
import {
  getGoalStats,
  getWorkoutStats,
} from "../Controllers/statsController.js";

const router = express.Router();

router.get("/workouts", authenticate, getWorkoutStats);
router.get("/goals", authenticate, getGoalStats);

export default router;
