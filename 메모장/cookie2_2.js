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

        const uniqueInt = Date.now();    //쿠키에 이름을 담아서 보내는 대신, uniqueInt라는 숫자 값을 보냄.
        session[uniqueInt] = {           //사용자의 이름과 만료 시간은 uniqueInt 속성명 아래에 있는 session이라는 객체에 대신 저장함.
          name,
          expires,
        };
        
        res.writeHead(302, {
          Location: '/',
      'Set-Cookie': `name=${encodeURIComponent(name)}; Expires= ${expires.toGMTString()}; HttpOnly; Path=/`,
        });
        res.end();

        //세션 쿠키(cookie.session)가 존재하고, 만료 기간이 지나지 않았다면  
      } else if (cookies.ssesion && ssesion[cookies.seesion].expires > new Date()) {
        //session 변수에서 사용자 정보를 가져와 사용함.
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

    //세션을 위해 사용하는 쿠키 : 세션 쿠키