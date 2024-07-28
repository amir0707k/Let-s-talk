import { Router } from "express";
import { login, signup } from "../controllers/AuthController.js";

const authRoutes = Router();

authRoutes.post("/signup", signup)
authRoutes.post("/login", login)
console.log("line 8",authRoutes);
export default authRoutes;