const os = require('os');

console.log(os.EOL === '\n');     //  맥 줄바꿈
console.log(os.EOL === '\r\n');     // 윈도우 줄바꿈

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());

// 다양한 운영체제
// 내 서버가 동작하고 있는 그 환경에 대한 정보를 얻어올 때 os모듈을 사용함.