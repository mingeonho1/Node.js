import express from "express";
import "express-async-error";
import * as authController from "../controller/auth.js";
import * as authvaildation from "../validation/auth.js";

const router = express.Router();

//POST /auth/signup
router.post("/signup", authvaildation.validateSignup, authController.singup);

//POST /auth/login
router.post("/login", authvaildation.ValidateLogin, authController.login);

export default router;
