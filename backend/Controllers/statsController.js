import Workout from "../models/Workout.js";
import Goal from "../models/Goal.js";

export const getWorkoutStats = async (req, res) => {
  try {
    const { startDate, endDate, type } = req.query;
    const query = { user: req.user.id };
    if (startDate && endDate) {
      query.createdAt = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }
    if (type) {
      query.type = type;
    }
    const workouts = await Workout.find(query);
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching workout stats", error });
  }
};

export const getGoalStats = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const query = { user: req.user.id };

    // Debugging: Log the user ID
    console.log("User ID:", req.user.id);

    if (startDate && endDate) {
      query.startDate = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }

    // Debugging: Log the query
    console.log("Query:", query);

    const goals = await Goal.find(query);

    // Debugging: Log the goals and their details
    console.log("Goals:", goals);
    goals.forEach((goal) => {
      console.log("Goal ID:", goal._id);
      console.log("Goal Start Date:", goal.target);
      console.log("Goal End Date:", goal.endDate);
    });

    res.status(200).json(goals);
  } catch (error) {
    console.error("Error fetching goal stats:", error);
    res.status(500).json({ message: "Error fetching goal stats", error });
  }
};
