import Goal from "../models/Goal.js";

export const createGoal = async (req, res) => {
  try {
    const goal = new Goal({ ...req.body, user: req.user.id });
    await goal.save();
    res.status(201).json(goal);
  } catch (error) {
    res.status(500).json({ message: "Error creating goal", error });
  }
};

export const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ user: req.user.id });
    res.status(200).json(goals);
  } catch (error) {
    res.status(500).json({ message: "Error fetching goals", error });
  }
};

export const updateGoal = async (req, res) => {
  try {
    const goal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(goal);
  } catch (error) {
    res.status(500).json({ message: "Error updating goal", error });
  }
};

export const deleteGoal = async (req, res) => {
  try {
    await Goal.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Goal deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting goal", error });
  }
};
