import express from "express";

import { authenticate } from "../middleware/authMiddleware.js";
import {
  createGoal,
  deleteGoal,
  getGoals,
  updateGoal,
} from "../Controllers/goalController.js";

const router = express.Router();

router.post("/create", authenticate, createGoal);
router.get("/get", authenticate, getGoals);
router.put("/update/:id", authenticate, updateGoal);
router.delete("/delete/:id", authenticate, deleteGoal);

export default router;
