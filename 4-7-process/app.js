const process = require('process');

console.log(process.execPath);  // 현재 실행되고 있는 노드의 위치
console.log(process.version);   // 노드의 버전
console.log(process.pid);       // 프로세스 아이디
console.log(process.ppid);      // 프로세스 부모의 아이디
console.log(process.platform);  // 플랫폼에 대한 정보들
console.log(process.env);       // 현재 컴퓨터에 저장된 환경변수의 모든 정보들
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
    console.log('setTimeout');  // 가장 마지막에 0초뒤에 seTimemout 실행
}, 0);

process.nextTick(()=>{
    console.log('nextTick');    // process.nextTick()은 액션의 실행을 이벤트루프의 다음
});                             //  차례까지 실제로 연기한다.

for(i=0; i<100; i++){
    console.log("for loop");    
}

