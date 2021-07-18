//https => createServer 메서드 사용

const https = require('https');
const fs = require('fs');

https.createServer({
  cert: fs.readFileSync('도메인인증서 경로'),
  key: fs.readFileSync('도메인비밀키 경로'),
  ca: [
    fs.readFileSync('상위 인증서 경로'),
    fs.readFileSync('상위 인증서 경로'),
  ],
}, (req, res) => {
  res.writeHead(200, {'Content-Type:':'text/html; charset=utf-8'});
  res.write('<h1>helloHyun</h1>');
  res.end('<h2>helloServer</h2>');
})
.listen(333, () => {
  console.log('333번 포트에서 서버대기중');
});
