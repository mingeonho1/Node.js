const { error } = require('console');
const fs = require('fs');

// 3
// rename(...., callback(error, data))
// try { renameSync(....)} catch(e){}
// promises.rename().then().catch(0)

try {
    fs.renameSync('4-10-file/text.txt', '4-10-file/text-new.txt');      // 동기
                                                                            
} catch (error) {
    console.log(error);
}

fs.rename('4-10-file/text-new.txt','4-10-file/text.txt',(error)=>{      // 비동기
    console.log('ERROR : ' + error);
});

fs.promises
.rename('4-10-file/text2.txt', '4-10-file/text-new.txt')
.then(() => console.log('Done!'))
.catch(console.error(error));

/* 
    동기적 처리
    : 일을 처리할 때 순서대로 처리하는 것이다.
      비동기적 처리와 비교했을 때 효율이 떨어진다.
      구현이 간단하다.
*/

/* 
    비동기적 처리
    : 일을 처리할 때 병렬적으로 동시에 처리하는 것이다.
      동기적 처리와 비교했을 때 효율이 높다.
      구현이 복잡하다.
*/