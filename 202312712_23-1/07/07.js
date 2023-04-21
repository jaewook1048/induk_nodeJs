// Promise 예제
function fetchUser(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = {
          1: { name: 'John', age: 23 },
          2: { name: 'Jane', age: 34 },
          3: { name: 'Bob', age: 45 }
        };
        const user = users[id];
        if (user) {
          resolve(user);
        } else {
          reject(new Error('User not found'));
        }
      }, 1000);
    });
  }
  
  fetchUser(2)
    .then(user => console.log(user))
    .catch(error => console.error(error));

// async/await 예제
async function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = {
              1: { name: 'John', age: 23 },
              2: { name: 'Jane', age: 34 },
              3: { name: 'Bob', age: 45 }
            };
            const user = users[id];
            if (user) {
              resolve(user);
            } else {
              reject(new Error('User not found'));
            }
          }, 1000);
        });
      }
      
      async function printUser(id) {
        try {
          const user = await fetchUser(id);
          console.log(user);
        } catch (error) {
          console.error(error);
        }
      }
      
      printUser(2);