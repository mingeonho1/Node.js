import express from "express";
import "express-async-error";
import * as tweetController from "../controller/tweet.js";
import * as tweetvaildation from "../validation/tweet.js";

const router = express.Router();

//GET /tweets
//GET /tweets?username=:username
router.get("/", tweetController.getTweets);

// GET /tweets/:id
router.get("/:id", tweetController.getTweet);

// POST /tweets
router.post("/", tweetvaildation.validateTweet, tweetController.create);

// PUT /tweets/:id
router.put("/:id", tweetvaildation.validateTweet, tweetController.update);

// DELETE /tweets/:id
router.delete("/:id", tweetController.remove);

export default router;
