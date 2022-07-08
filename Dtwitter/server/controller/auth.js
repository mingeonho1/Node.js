import * as authRepository from "../data/auth.js";

export async function singup(req, res, next) {
  const { username, password, name, email, url } = req.body;
  const strongPw = await authRepository.getToken(username, password);
  const info = await authRepository.create(
    username,
    strongPw,
    name,
    email,
    url
  );
  if (info) {
    res.status(201).json({ message: "회원가입 성공", info });
  } else {
    res.status(404).json({ message: "username이 중복되었습니다." });
  }
}
export async function login(req, res, next) {
  const { username, password } = req.body;
  const checkId = await authRepository.loginCheck(username, password);
  if (!checkId) {
    return res.status(401).json({ message: "유효하지 않은 아이디" });
  }
  if (checkId.password === password) {
    res.status(200).json({ message: "로그인 성공" });
  } else {
    res.status(404).json({ message: "로그인 실패" });
  }
}
