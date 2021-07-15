const express = require('express');
const app = express(); 

const server = app.listen(3000, () => {
    console.log('start server : localhost:3000');
}); 
//localhost:3000 했을 때 웹서버가 만들어짐을 알 수 있음.


app.get('/', function (req, res) {
    res.send('hello hyun')
})
//localhost:3000 페이지 -> 'hello hyun'

app.get('/click', function (req, res) {
    res.send('click page')
})
//localhost:3000/click 페이지 -> 'click page'

 