const express = require('express');

const app = express();

app.get ('/', (req, res) => {
  res.send('testing express');
});

module.exports = app;


//express기본테스팅
