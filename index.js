//log.js 라우팅분리

"use strict";

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home/index');
});

router.get('/login', (req, res) => {
  res.render('home/login');
});

//log.js와의 연결을 위해 라우터를 외부파일에서 사용할 수 있게 해주는 역할
module.exports = router;    //외부로 내보내기 해주는 명령어
