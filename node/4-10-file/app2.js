const fs = require('fs').promises;

// read a file
fs.readFile('4-10-file/text.txt', 'utf-8')  // 파일 읽기 
.then((data) => console.log(data))
.catch(console.error);

// writing a file1
fs.writeFile('4-10-file/text.txt', 'Hello! Geon HO ')   // 텍스트 쓰기
.catch(console.error);

fs.appendFile('4-10-file/text.txt', 'YO! Geon HO ')     //  텍스트 추가
.then((data) => {
    fs.copyFile('4-10-file/text.txt', '4-10-file/text2.txt')    // 비동기 처리이기 때문에 텍스트를 추가하고 복사
        .catch(console.error);
})
.catch(console.error);

// copy
fs.copyFile('4-10-file/text.txt', '4-10-file/text2.txt')    // 파일 복사
.catch(console.error);

// folder
fs.mkdir('sub-folder')  // 폴더생성
.catch(console.error);

fs.readdir('./')    // 현재 경로에 있는 모든 폴더를 읽음
.then(console.log)
.catch(console.error);

// api를 사용할 때 인자는 어떤 것들이 있는지
// 추가적으로 전달해야하는 옵션과 같은 인자들이 있는지
// 함수에서 리턴되는 값은 무엇인지
// promisess 라면 catch를 이용해서 에러를 잡는것이 중요함 !               