const answer = `Node.js에서 모듈을 불러오는 방식은 CommonJS 방식과 ES6 모듈 방식이 있습니다.
CommonJS 방식
CommonJS 방식에서는 require() 함수를 사용하여 모듈을 불러옵니다. 모듈에서 내보내는 함수나 객체는 module.exports 객체에 할당합니다.
ES6 모듈 방식
ES6 모듈 방식에서는 import 문을 사용하여 모듈을 불러옵니다. 모듈에서 내보내는 함수나 객체는 export 문으로 내보냅니다.
CommonJS 방식은 주석처리 하였습니다. 사용하실거면  package.json에서  "type" : "module", 제거 하면 됩니다.
`;
console.log(answer);


// CommonJS 방식
//const myModule = require('./myModule');
//myModule.greet('Alice'); // 출력결과: Hello, Alice!

//ES6 모듈 방식
import { greet1 } from './myModule1.js';
greet1('Alice'); // 출력결과: Hello, Alice!