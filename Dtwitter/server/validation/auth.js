import { body, param, validationResult } from "express-validator";

export const Validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array()[0].msg });
};

export const validateSignup = [
  body("username")
    .trim()
    .isLength({ min: 3 })
    .withMessage("username은 3글자 이상으로 작성해주세요."),
  body("password")
    .trim()
    .isLength({ min: 3 })
    .withMessage("password은 3글자 이상으로 작성해주세요."),
  body("name")
    .trim()
    .notEmpty()
    .withMessage("이름을 입력해주세요............."),
  body("email")
    .isEmail()
    .withMessage("이메일을 입력해주세요.")
    .normalizeEmail(),
  body("url")
    .isURL()
    .withMessage("url형식이 아닙니다.")
    .optional({ nullable: true, checkFalsy: true }),
  Validate,
];

export const ValidateLogin = [
  body("username")
    .trim()
    .isLength({ min: 3 })
    .withMessage("username은 3글자 이상으로 작성해주세요."),
  body("password")
    .trim()
    .isLength({ min: 3 })
    .withMessage("password은 3글자 이상으로 작성해주세요."),
  Validate,
];
