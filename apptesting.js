const express = require('express');

const app = express();

app.get ('/', (req, res) => {
  res.send('testing express');
});

app.get ('/users', (req, res) => {
  res.send('test express');
  
app.post('/', (req, res) => {
 
});
  
app.delete('/', (req, res) => {
  
});

module.exports = app;


//express기본테스팅
