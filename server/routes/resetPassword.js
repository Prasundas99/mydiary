import express from "express";
import {
  emailVerification,
  passwordReset,
} from "../controller/resetPasswordComtroller.js";
const router = express.Router();

router.route("/email-verify").post(emailVerification);
router.route("/password/:token").post(passwordReset);

export default router;