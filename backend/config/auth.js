import { ENV_VARS } from "./envVars.js";

export const jwtSecret = ENV_VARS.JWT_SECRET;
export const jwtExpiration = "1h";
