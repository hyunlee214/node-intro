const http = require('http');
const fs = require('fs').promises;
const users = {};  //데이터 저장용, [for '/users']

http.createServer(async (req, res) => {
  try {
     console.log(req.method, req.url); 

    //req.method를 이용해 http 요청 메서드를 구분함
    if (req.method === 'GET') {     //메서드가 GET이면,
    if (req.url === '/') {          //다시 req.url로 요청 주소를 구분함.
      const data = await fs.readFile('./restFront.html');    //주소가 /이면, restFront.html 파일을 제공함.
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});   
      return res.end(data);
      
    } else if (req.url === '/about') {      //주소가 /about이면, about.html 파일을 제공
      const data = await fs.readFile('./about.html');
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      return res.end(data);

    } else if (req.url === '/users') {
      res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
      return res.end(JSON.stringify(users));
    }    

    //주소가 '/'도 '/about'도 '/users도 세개 다 아니면
    //주소가 두개 모두 아닌 이외의 경우이면 주소에 적힌 파일을 제공함 
    //만약, 존재하지 않는 파일을 요청하거나, 또는 GET메서드 요청이 아닌 경우에는 404notfound에러가 응답으로 전송
    try {      
      const data = await fs.readFile(`.${req.url}`);  
      return res.end(data);
    } catch (err) {
      //주소에 해당하는 라우트를 못 찾았다는 404 발생
    }
  } else if (req.method === 'POST') {
    if (req.url === '/user') {
      let body = '';
      // 요청의 body를 stream 형식으로 받음
      req.on('data', (data) => {
        body += data;
      });
      // 요청의 body를 모두 받은 후 실행댐 
      return req.on('end', () => {
        console.log('POST 본문(Body):', body);
        const { name } = JSON.parse(body);
        const id = Date.now();
        users[id] = name;
        res.writeHead(201);
        res.end('등록 성공');
      });
    }
  } else if (req.method === 'PUT') {
    if (req.url.startsWith('/user/')) {
      const key = req.url.split('/')[2];
      let body = '';
      req.on('data', (data) => {
        body += data;
      });
      return req.on('end', () => {
        console.log('PUT 본문(Body):', body);
        users[key] = JSON.parse(body).name;
        return res.end(JSON.stringify(users));
      });
    }
  } else if (req.method === 'DELETE') {
    if (req.url.startsWith('/user/')) {
      const key = req.url.split('/')[2];
      delete users[key];
      return res.end(JSON.stringify(users));
    }
  }
  
  res.writeHead(404);
  return res.end('notfound');
} catch (err) {
  console.error(err);
  res.writeHead(500);
  res.end(err);
  }
})
  .listen(8888, () => {
    console.log('8888번 포트에서 서버 대기 중');
  });
  