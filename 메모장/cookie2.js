const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie ='') => 
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k,v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});
    
    http.createServer(async(req,res)=> {
      const cookies = parseCookies(req.headers.cookie);

      //주소가 '/login'으로 시작하는 경우
      if (req.url.startsWith('/login')) {
        const {query} = url.parse(req.url);
        const {name} = qs.parse(query);
        const expires = new Date();
        //쿠키의 유효 시간을 현재 시간 + 5분으로 설정하러 고고씽
        expires.setMinutes(expires.getMinutes() + 5);
        res.writeHead(302, {
          Location: '/',
      'Set-Cookie': `name=${encodeURIComponent(name)}; Expires= ${expires.toGMTString()}; HttpOnly; Path=/`,
        });
        res.end();

        //name이라는 쿠키가 있을 경우
      } else if (cookies.name) {
        res.writeHead(200, {'Content-Type':'text-plain; charset=utf-8'});
        res.end(`${cookies.name}님 하이영`);
      } else {
        try {
          const data = await fs.readFile('./cookie2.html');
          res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
          res.end(data);
        } catch (e) {
          res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
          res.end(err.message);
        }
      }
    })
    .listen(8085, () => {
      console.log('8085포트에서 대기중!');
    });