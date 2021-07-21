const express = require('express');

const cookieParser = require('cookie-parser');

const app = express();

app.use (cookieParser());    // 미들웨어 'cookieParser' 등록

app.get ('/count', function(req, res) {
  if (req.cookies.count) {
    var count = parseInt(req.cookies.count);
  } else {   
    var count = 0;        //cookie의 값이 없다면 count 초기화
  }
  count = count + 1;
  res.cookie('count', count);
  res.send('count : ' + count);
});

app.listen (3000, function(){
  console.log ('3000포트 연결');
});