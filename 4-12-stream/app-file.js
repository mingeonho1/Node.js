const fs = require('fs');

const beforMem = process.memoryUsage().rss;
fs.readFile('./file.txt', (_, data) => {        // 데이터를 다 한번에 받아와서 콜백함수에서 알 수 있었다면
    fs.writeFile('./file2.txt', data, () => {});
    // calculate
    const afterMem = process.memoryUsage().rss;
    const diff = afterMem - beforMem;
    const consumed = diff / 1024 / 1024;
    console.log(diff);
    console.log(`Consumed Memory : ${consumed}MB`);
})