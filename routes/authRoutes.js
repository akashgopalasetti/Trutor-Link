import express from "express";
import { register, login } from "../controllers/authController.js";
const router = express.Router();

// Single endpoints that accept role in body (student or tutor)
router.post("/register", register); // {name,email,password,role}
router.post("/login", login);       // {email,password,role}

export default router;
//