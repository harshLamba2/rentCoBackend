import express from "express";
import authentication from "./modules/authentication/authRoutes.js";

const router = express.Router();

router.use("/authentication", authentication);

export default router;
