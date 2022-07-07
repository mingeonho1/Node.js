import express from "express";
import "express-async-error";
import * as authController from "../controller/auth.js";
import * as tweetvaildation from "../validation/tweet.js";

const router = express.Router();

//POST /auth/signup
router.post("/signup", authController.singup);

//POST /auth/login
router.post("/login", authController.login);
