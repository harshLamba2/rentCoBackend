import express from "express";
const router = express.Router();
import { authenticateUser } from "./authenticationController.js";

router.post("/authenticateUser", authenticateUser);

export default router;
