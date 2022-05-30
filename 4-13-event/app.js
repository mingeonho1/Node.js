const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) => {
    console.log('first callback - ', args);
};

emitter.on('geonho', callback1);

emitter.on('geonho', (args) => {
    console.log('second callback - ', args);
});

emitter.emit('geonho', {message: 1});
emitter.emit('geonho', {message: 2});
// emitter.removeListener('geonho', callback1);
emitter.removeAllListeners();
emitter.emit('geonho', {message: 3});
