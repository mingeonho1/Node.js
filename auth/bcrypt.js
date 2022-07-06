const bcrypt = require("bcrypt");

const password = "qwe123";
const hashed = bcrypt.hashSync(password, 5); // 10~12를 권장
console.log(`password : ${password}, hased : ${hashed}`);

const result = bcrypt.compareSync("qwe123", hashed);
console.log(result);
