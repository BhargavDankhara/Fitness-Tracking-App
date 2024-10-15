import jwt from "jsonwebtoken";
import { jwtSecret, jwtExpiration } from "../config/auth.js";

export const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, jwtSecret, {
    expiresIn: jwtExpiration,
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, jwtSecret);
};
