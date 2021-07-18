//http2 적용
//http2는 createSecureServer 메서드 사용

const http2 = require('http2');
const fs = require('fs');

http2.createSecureServer({
  cert: fs.readFileSync('도메인인증서 경로'),
  key: fs.readFileSync('도메인비밀키 경로'),
  ca: [
    fs.readFileSync('상위인증서 경로'),
    fs.readFileSync('상위인증서 경로'),
  ],
}, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
})
  .listen(333, () => {
    console.log('333번 포트에서 서버대기중!');
  });