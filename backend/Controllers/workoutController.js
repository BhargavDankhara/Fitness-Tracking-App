import Workout from "../models/Workout.js";

export const createWorkout = async (req, res) => {
  try {
    const workout = new Workout({ ...req.body, user: req.user.id });
    await workout.save();
    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json({ message: "Error creating workout", error });
  }
};

export const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user.id });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching workouts", error });
  }
};

export const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ message: "Error updating workout", error });
  }
};

export const deleteWorkout = async (req, res) => {
  try {
    await Workout.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Workout deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting workout", error });
  }
};
