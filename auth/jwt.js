const jwt = require("jsonwebtoken");

const secret = "QWER1234";

const token = jwt.sign(
  {
    id: "geonho",
    isAdmin: false,
  },
  secret,
  { expiresIn: 2 }
);
setTimeout(() => {
  jwt.verify(token, secret, (error, decoded) => {
    console.log(error, decoded);
  });
}, 3000);
