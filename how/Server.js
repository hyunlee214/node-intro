const http = require('http');

http.createServer((req, res) => {
  res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
  res.write('<h1>helloHyunlee</h1>');
  res.end('<p>hi Server</p>');
})

.listen(8080, () => {
  console.log('8080번 포트에서 서버대기중!');
});