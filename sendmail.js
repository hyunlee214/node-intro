const nodemailer = require('nodemailer');

// 계정 정보 선언 (호스트정보, 포트정보, 보안정보, 유저정보, 패스워드정보)
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "77f9db40b8d887",
      pass: "45b3576b2874fd"
    }
  }

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {    // sendMail을 통해 이메일을 보냄
        if (error) {
            console.log(error);
        } else {
            console.log(info);
            return info.response   // 에러가 안날때 응답 어케오는지
        }
    }); 
};

// 옵션 선언
let email_data = {
    from : 'hyun110214@naver.com',
    to : 'hyun110214@naver.com',
    subject: '테스트메일',
    text:'nodejs공부'
}

send(email_data);