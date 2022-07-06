import express from "express";
import { body, param, validationResult } from "express-validator";

const app = express();

app.use(express.json());

const Validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array()[0].msg });
};

app.post(
  "/users",
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("이름을 입력해주세요.")
      .isLength({ min: 2, max: 10 })
      .withMessage("이름은 2글자 이상 10글자 이하로 작성해주세요."),
    body("age")
      .notEmpty()
      .withMessage("나이를 입력해주세요.")
      .isInt()
      .withMessage("나이는 숫자로만 입력해주세요."),
    body("email")
      .isEmail()
      .withMessage("이메일을 입력해주세요.")
      .normalizeEmail(),
    Validate,
  ],
  (req, res, next) => {
    console.log(req.body);
    res.sendStatus(201);
  }
);

app.get(
  "/:email",
  [param("email").isEmail().withMessage("이메일을 입력해주세요."), Validate],
  (req, res, next) => {
    res.send("MAIL");
  }
);

app.listen(8080);
