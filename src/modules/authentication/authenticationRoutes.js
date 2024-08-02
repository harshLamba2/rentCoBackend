import express from "express";
const router = express.Router();
import {
  sendVerificationCode,
  verifyUserEmail,
  setUserPassword,
} from "./authenticationController.js";

router.post("/sendVerificationCode", sendVerificationCode);
router.post("/verifyUserEmail", verifyUserEmail);
router.put("/setUserPassword", setUserPassword);

export default router;
