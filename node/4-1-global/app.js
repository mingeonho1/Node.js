const fs = require('fs');

console.log(global);        

global.hello = () => {
    global.console.log('hello');
}

global.hello();
hello();

// global은 전역 객체로, node 환경 내에서 모든 파일에서 접근 가능하고 내부의 메서드를
// global 표기를 생략하고 사용이 가능하다. 내부에 message, console ...