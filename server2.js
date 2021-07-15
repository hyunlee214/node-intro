const express = require('express');
const app = express(); 

const server = app.listen(3003, () => {
    console.log('start server : localhost:3003');
}); 
//localhost:3000 했을 때 웹서버가 만들어짐을 알 수 있음.


app.set('views', __dirname + '/views');

app.set('veiwengine', 'ejs');

app.engine('html', require('ejs').renderFile);



app.get('/', function (req, res) {
    res.render('index.html')
})

app.get('/click', function (req, res) {
    res.render('click.html')
})

 