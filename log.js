const express = require ('express');
const app = express();

//라우팅
const home = require('./routes/home');
//const PORT = 3333; 

//앱 세팅
app.set('views', './views');
app.set('view engine', 'ejs');

//use메서드를 통해 미들웨어 등록
app.use('/', home);  

app.get ('/', (req, res) => {
  res.render('home/index');
});

app.get ('/login', (req, res) => {
  res.render('home/login');
});

//app.listen(PORT, () => {
//  console.log('서버 start')
//});

// app.listen() 모듈화 =>
module.exports = app;
