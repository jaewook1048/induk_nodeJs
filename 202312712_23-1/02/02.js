const answer = `콜백 핸들러의 전달되는 인수는 특정 함수에 매개변수로서 전달된 함수를 지칭합니다. 그리고, Callback function은 그 함수를 전달받은 함수 안에서 호출되게 합니다.\n콜백 지옥을 해결하는 방법에는 Promise 나 Async를 사용하는 방법이 있습니다. \nPromise란 비동기 연산이 종료된 이후에 결과를 알기 위해 사용하는 객체입니다. 프라미스를 사용하면, 비동기 메서드를 마치 동기 메서드처럼 값을 반환할 수 있습니다. then()과 catch()문의 체이닝을 통해 값을 반환 받아올 수 있습니다. 
아래 코드는 Promise 사용하여 해결한 예제`;

console.log(answer);

// 개선 전
function taskA(a, b, cb) {
    setTimeout(() => {
      const res = a + b;
      cb(res);
    }, 2000);
  }
  
  function taskB(a, cb) {
    setTimeout(() => {
      const res = a * 2;
      cb(res);
    }, 2000);
  }
  
  function taskC(a, cb) {
    setTimeout(() => {
      const res = a * -1;
      cb(res);
    }, 2000);
  }
  
  taskA(1, 2, (res_a) => {
    taskB(res_a, (res_b) => {
      taskC(res_b, (res_c) => {
        console.log("taskC Result : ", res_c);
      });
    });
  });


// 개선 후
function taskA(a, b) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const res = a + b;
        resolve(res);
      }, 2000);
    });
  }
  
  function taskB(a) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const res = a * 2;
        resolve(res);
      }, 2000);
    });
  }
  
  function taskC(a) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const res = a * -1;
        resolve(res);
      }, 2000);
    });
  }
  
  taskA(1, 2)
    .then((res_a) => {
      return taskB(res_a);
    })
    .then((res_b) => {
      return taskC(res_b);
    })
    .then((res_c) => {
      console.log("taskC Result : ", res_c);
    })
    .catch((err) => {
      console.error(err);
    });