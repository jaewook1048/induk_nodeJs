const EventEmitter = require('events');

const myEmitter = new EventEmitter();

let answer = '';

// 이벤트 리스너 선언
myEmitter.on('event', () => {
  answer += '첫 번째 이벤트가 발생했습니다. \n';  // 1
});

myEmitter.on('event', () => {
  answer += '두 번째 이벤트가 발생했습니다. \n'; // 2
});

myEmitter.once('event', () => {
  answer += '세 번째 이벤트가 발생했습니다. '; // 3
});

// 이벤트 실행
myEmitter.emit('event');

console.log(answer); // '첫 번째 이벤트가 발생했습니다. 두 번째 이벤트가 발생했습니다. 세 번째 이벤트가 발생했습니다. '

``
