import express from "express";

import { authenticate } from "../middleware/authMiddleware.js";
import {
  createWorkout,
  deleteWorkout,
  getWorkouts,
  updateWorkout,
} from "../Controllers/workoutController.js";

const router = express.Router();

router.post("/create", authenticate, createWorkout);
router.get("/get", authenticate, getWorkouts);
router.put("/update/:id", authenticate, updateWorkout);
router.delete("/delete/:id", authenticate, deleteWorkout);

export default router;
