import { Router } from "express";
import { getUserInfo, login, signup } from "../controllers/AuthController.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";

const authRoutes = Router();

authRoutes.post("/signup", signup)
authRoutes.post("/login", login)
authRoutes.get("/user-info", verifyToken, getUserInfo)

console.log("line 8",authRoutes);
export default authRoutes;