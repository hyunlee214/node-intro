//응답을 보내는 부분과 서버에 연결하는 부분 추가

const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  res.write('<h1>helloHyun</h1>');
  res.end('<p>helloServer</p>');
})

.listen(8080, () => {     //서버 연결
  console.log('8080번 포트에서 서버대기 중입니당');
});