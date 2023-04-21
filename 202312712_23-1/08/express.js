// express 모듈 불러오기  npm install express
const express = require('express');
const app = express();

// '/' 경로로 GET 요청이 왔을 때 응답
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// '/login' 경로로 GET 요청이 왔을 때 응답
app.get('/login', (req, res) => {
  res.send('This is login page.');
});

// '/user' 경로로 GET 요청이 왔을 때 응답
app.get('/user', (req, res) => {
  res.send('This is user page.');
});

// 서버 실행
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});