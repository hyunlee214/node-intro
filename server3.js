// mysql 모듈 사용, db데이터 가져오기

const express = require('express');
const app = express(); 

const server = app.listen(3003, () => {
    console.log('start server : localhost:3003');
}); 
//localhost:3000 했을 때 웹서버가 만들어짐을 알 수 있음.

//db와 연결하기 위해서 db정보 입력
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'example.org',
  user            : 'bob',
  password        : 'secret',
  database        : 'my_db'
}); 


app.set('views', __dirname + '/views');
app.set('veiwengine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.get('/', function (req, res) {
    res.render('index.html')
})

app.get('/click', function (req, res) {
    res.render('click.html')
})


// 새 라우터 추가 생성
app.get('/db', function (req, res) {
    //정의하는 부분
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('SELECT something FROM sometable', function (error, results, fields) {

            // 가지고 온 데이터를 화면에 보내주는 작업
            res.send(JSON.stringify(results));   
            console.log('results', results); 

          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;
       
          // Don't use the connection here, it has been returned to the pool.
        });
      });
})