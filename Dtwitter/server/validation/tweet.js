import { body, param, validationResult } from "express-validator";

export const Validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array()[0].msg });
};

export const validateTweet = [
  body("text")
    .trim()
    .isLength({ min: 3 })
    .withMessage("text는 3글자 이상으로 작성해주세요.."),
  Validate,
];
