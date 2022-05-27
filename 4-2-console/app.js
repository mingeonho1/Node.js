console.log('logging...');
console.clear();

// log level
console.log('log');      // 개발
console.info('info');        // 정보
console.warn('warn');     // 경보 
console.error('error');      // 에러, 사용자 에러, 시스템 에러

// assert
console.assert(2 === 3, 'not same!');   // True가 아닌경우에만 출력
console.assert(2 === 2, 'same!');

// print object
const student = {name:'geonho', age: 22, company : {name: 'unionc'}};
console.log(student);
console.table(student);     // 테이블로 보기좋게 출력 됨
console.dir(student, {showHidden: true, colors: false, depth: 0 });     //옵션을 줄 수 있음

// measuring time
console.time('for loop');
for(let i=0; i<10; i++){
    console.log(i);
}
console.timeEnd('for loop');    // 걸린시간 측정

// counting
function a() {
    console.count('a function');    // 함수가 몇번 호출된지 카운트
}   

a();
a();

console.countReset('a function');   // 카운트 초기화

// trace
function f1(){
    f2();
}
function f2(){
    f3();
}
function f3(){
    console.log('f3');
    console.trace();    // 어디서 함수를 호출했는지 알려줌  // 디버깅할 때 좋음
}
f1();