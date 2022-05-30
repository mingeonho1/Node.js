const EventEmitter = require('events');

class Logger extends EventEmitter{      // Logger는 이벤트이미터를 상속함 -> 즉 이벤트이미터에 들어있는 모든 함수들과 속성들을 가질 수 있음
    log(callback){
        this.emit('log', 'started...');
        callback();
        this.emit('log', 'ended!');
    }
}


module.exports.Logger = Logger;

// 이벤트 이미터는 한번 객체를 만들면 그 객체내에서 발생하는 이벤트의 한해서 들을 수 있다.
// 여러가지 이벤트이미터 객체를 만들면 다른 이미터에서 발생하는 이벤트는 다른 이미터에서 들을 수 없다.