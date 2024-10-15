import FitnessProgram from "../models/FitnessProgram.js";
import User from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

export const createFitnessProgram = async (req, res) => {
  try {
    const program = new FitnessProgram(req.body);
    await program.save();
    res.status(201).json(program);
  } catch (error) {
    res.status(500).json({ message: "Error creating fitness program", error });
  }
};

export const getFitnessPrograms = async (req, res) => {
  try {
    const programs = await FitnessProgram.find();
    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching fitness programs", error });
  }
};
