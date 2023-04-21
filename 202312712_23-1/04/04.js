const answer = `Node.js에서 HTTP 서버를 생성하는 코드입니다.
 이 코드를 실행하면 3000번 포트에서 HTTP 서버가 실행되며, 클라이언트가 해당 포트로 요청을 보내면 "Hello World"라는 문자열이 응답으로 전송됩니다.
 이 코드를 실행시키고 http://localhost:3000에 접속하면 Hello World 문자열이 웹 브라우저에서 출력됩니다.
`;
console.log(answer);
var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
  // 정적 파일을 처리하는 코드
  if (request.url === '/04.html') {
    fs.readFile('./04.html', function(err, data) {
      if (err) {
        response.writeHead(404);
        response.end('File not found');
      } else {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
      }
    });
  } else {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
  }
}).listen(3000);