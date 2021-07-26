const express = require ('express');
const app = express();

const PORT = 3333; 

app.set('views', './views');
app.set('view engine', 'ejs');

app.get ('/', (req, res) => {
  res.render('home/index');
});

app.get ('/login', (req, res) => {
  res.render('home/login');
});

app.listen(PORT, () => {
  console.log('서버 start')
});
