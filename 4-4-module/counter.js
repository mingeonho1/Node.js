let count = 0;

function increase(){
    count++;
}

function getCount(){
    return count;
}

module.exports.getCount = getCount;
// module.exports.increase = increase;
console.log(module.exports === exports);
exports = {};
console.log(module.exports === exports);
exports.increase = increase;
console.log(module);

// 자바스크립트 자체적으로 제공하는 import와 exports