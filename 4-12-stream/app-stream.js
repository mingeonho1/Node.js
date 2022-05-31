const fs = require('fs');
const data = [];

fs.createReadStream('./file.txt', { // 스트림은 조금조금씩 읽어오기 때문에 이벤트 베이스!
    highWaterMark: 8, // 기본값 64 kbytes
    // encoding: 'utf-8',
}).on('data', chunk => {
    // console.log(chunk);
    data.push(chunk);
    console.count('data');
}).on('end', () => {
    console.log(data.join(''));
}).on('error', error => {
    console.log(error);
});
