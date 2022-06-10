const fs = require('fs');

const beforMem = process.memoryUsage().rss;
fs.readFile('./file.txt', (_, data) => {        // 데이터를 다 한번에 받아와서 콜백함수에서 알 수 있었다면 스트림은 ->
    fs.writeFile('./file2.txt', data, () => {});
    // calculate
    const afterMem = process.memoryUsage().rss;
    const diff = afterMem - beforMem;
    const consumed = diff / 1024 / 1024;
    console.log(diff);
    console.log(`Consumed Memory : ${consumed}MB`);     // 텍스트 파일을 읽어서 쓰는데까지 노드에서 사용하는 메모리
})