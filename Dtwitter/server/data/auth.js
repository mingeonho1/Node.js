import jwt from "jsonwebtoken";

let auth = [
  {
    username: "als77770",
    password:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFsczc3NzcwIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjU3MjY0NDMwLCJleHAiOjE2NTczNTA4MzB9.VQd-BO7xc1s3tcqv_rxS-nrCfiswdSc2LkdhXtcKUac",
    name: "geonho",
    email: "als77770@naver.com",
    url: "https://naver.com",
  },
];

export async function getToken(username, password) {
  const token = jwt.sign(
    {
      id: username,
      isAdmin: true,
    },
    password,
    { expiresIn: "1 days" }
  );
  return token;
}

export async function create(username, password, name, email, url) {
  const check = auth.find((a) => a.username !== username);
  if (check) {
    const info = {
      username,
      password,
      name,
      email,
      url,
    };
    auth.push(info);
    return info;
  }
}

export async function loginCheck(username) {
  return auth.find((a) => a.username === username);
}
