import express from "express";
const router = express.Router();
import { authenticateUser } from "./authController.js";

router.post("/authenticateUser", authenticateUser);

export default router;
