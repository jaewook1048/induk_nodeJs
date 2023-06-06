
/*require메서드로 Express 모듈을 적재하고
Express 애플리케이션 객체(app)를 생성*/
const express = require('express');
const app = express();

/* Express를 사용하여 Http 서버를 생성하고
 생성된 Http 서버를 socket.io server로 upgrade 하는 문장 */
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

// io객체를 통해서 socket.io에 정의된 여러 통신 메서드를 사용가능
const io = new Server(server);

// root url에 대한 라우트를 정의하는 문장
//localhost:3000으로 클라이언트가 접속하면 index.html을 전송
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


// 접속된 클라이언트들이 보내는 이벤트 핸들러를 정의
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    // 접속된 모든 클라이언트에게 전달받은 메시지를 전송
    io.emit('chat message', msg);
  });
});

/*3000번 포트를 사용해 서버를 열고
서버가 가동하고 있다면 해당 문자열을 콘솔에 출력하는 함수*/
server.listen(3000, () => {
  console.log('listening on *:3000');
});