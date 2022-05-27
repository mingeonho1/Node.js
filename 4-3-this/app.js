function hello(){
    console.log(this);
    console.log(this === global);
}

hello();    //  여기서 this 는 global을 카르키고 있음

class A {
    constructor(num){
        this.num = num;
    }
    memberFunction(){
        console.log('---- class ----');
        console.log(this);
        console.log(this === global);   
    }
}

const a = new A(1);
a.memberFunction();     // 클래스 안에 있는 this는 자기자신을 가르키고 있음

console.log('--- global scope ---');
console.log(this);
console.log(this === module.exports);   // Node 는 this는 module을 가르키고 있음