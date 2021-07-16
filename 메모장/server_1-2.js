const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
  res.write('<h1>helloHyun<h1>');
  res.end('<p>HelloServer!</p>');
})

.listen(8080, () => { //서버연결
  console.log('8080포트에서 서버대기중입니다');
});

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
  res.write('<h1>helloHyun</h1>');
  res.end('<p>helloServer</p>');
})

.listen(8081, () => {
  console.log('8081포트에서 서버대기중입니다');
});