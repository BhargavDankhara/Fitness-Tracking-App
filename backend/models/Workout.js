import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: { type: String, required: true },
    duration: {
      type: Number,
      required: true,
    },
    intensity: {
      type: String,
      required: true,
    },
    caloriesBurned: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Workout", workoutSchema);
