const logger = require('./logger.js');
const emitter = new logger.Logger();

emitter.on('log', (event) => {
    console.log(event);
});

emitter.log(() => {
    console.log('.... doing something!');
});

// 이벤트 이미터는 한번 객체를 만들면 그 객체내에서 발생하는 이벤트의 한해서 들을 수 있다.
// 여러가지 이벤트이미터 객체를 만들면 다른 이미터에서 발생하는 이벤트는 다른 이미터에서 들을 수 없다.