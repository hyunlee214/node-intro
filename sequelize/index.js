const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

//시퀄라이즈 인스턴스화
const sequelize = new Sequelize(config.database, config.username, config.password, config);

//db라는 객체를 만들어 모듈로 사용
const db = {};

//시퀄라이즈 패키지와 시퀄라이즈 인스턴스를 db에 각각 넣어서 사용
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;