import express from "express";

import { authenticate } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";
import {
  createFitnessProgram,
  getFitnessPrograms,
  getUsers,
} from "../Controllers/adminController.js";

const router = express.Router();

router.get("/users", authenticate, authorize(["admin"]), getUsers);
router.post(
  "/programs/create",
  authenticate,
  authorize(["admin"]),
  createFitnessProgram
);
router.get(
  "/programs/get",
  authenticate,
  authorize(["admin"]),
  getFitnessPrograms
);

export default router;
