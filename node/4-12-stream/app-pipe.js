const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./flie4.zip');
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on('finish', () => {
    console.log('done!!');
});

// const http = require('http');
// const server = http.createServer((req, res) => {    
//     fs.readFile('file.txt', (err, data) => {    // 파일을 다 읽는 다음
//         res.end(data);  //메모리에 들어온 데이터를 반응하게 됨
//     });
// });
// server.listen(3000);

const http = require('http');
const server = http.createServer((req, res) => {    
    const stream = fs.createReadStream('./file.txt');   //위의 방법보다 스트림 자체를 리스폰스에 파이핑해서 연결해주면 더 좋음
    stream.pipe(res);
    
});
server.listen(3000);