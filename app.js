//intro

/* const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/',(req, res) => {
  res.send('testing express');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});
*/

//미들웨어 추가 
//미들웨어는 app.use와 함께 사용 => app.use(미들웨어) 


const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
  console.log('모든요청에 실행');
  next();
});
app.get('/',(req, res, next) => {
  console.log('GET / 요청에서만 실행');
  next();
}, (req, res) => {
  throw new Error('에러는 미들웨어로')
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
})

app.get('/',(req, res) => {
  res.send('testing express');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});