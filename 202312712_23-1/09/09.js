const answer = `보너스 1번 문제
`;
console.log(answer);


//일반 함수
const person = {
    name: "Alice",
    sayHello: function() {
      console.log("Hello, " + this.name + "!");
    }
  }
  person.sayHello(); // "Hello, undefined!"

//화살표 함수
const person1 = {
    name: "Alice",
    sayHello: () => {
      console.log("Hello, " + this.name + "!");
    }
  }
  
  person1.sayHello(); // "Hello, undefined!"