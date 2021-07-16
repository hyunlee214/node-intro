const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  res.write('<h1>helloHyun</h1>');
  res.end('<p>HelloServer!</p>');
});

server.listen(8080);

server.on('listening', () => {
  console.log('8080번 포트에서 서버대기중입다!');
});

server.on('error',(error) => {
  console.error(error);
});