// Fixed- size chuck of memory      // 메모리에서 고정된 사이즈의 메모리 덩어리 
// array of integers, byte of data  // 숫자의 배열, 데이터에 있는 바이트 그자체

const buf = Buffer.from('Hi');
console.log(buf);       // 유니코드 형태로 출력
console.log(buf.length);
console.log(buf[0]);    
console.log(buf[1]);    // ASCII (아스키코드로 출력)
console.log(buf.toString());    // 기본값은 utf-8로

// create
const buf2 = Buffer.alloc(2);           // 사이즈 2개인 버퍼를 생성     // alloc 함수를 사용하면 메모리에서 사용가능한 메모리덩어리를 찾아서 그 덩어리를 초기화 시켜줌
const buf3 = Buffer.allocUnsafe(2);     // 이 함수는 초기화를 하지 않아 상대적으로 fast     // 하지만 데이터가 들어있을 수도 있으므로 초기화하는 것이 좋음
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log("buf2 :",buf2.toString());
console.log("buf3 :",buf3.toString());

// concat
const newBuf = Buffer.concat([buf,buf2,buf3]);  // 버퍼들을 연결
console.log(newBuf.toString());
