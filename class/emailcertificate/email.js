// email.js
import axios from "axios";
import nodemailer from "nodemailer";
import getToken from "./getToken.js";
import getToday from "./utils.js";
export function checkEmail(myemail) {
  if (myemail === undefined || myemail.includes("@") === false) {
    console.log("에러 발생!!! 이메일 주소를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
  ``;
}

export function getWelcomeTemplate(name) {
  const mynum = getToken();
  const mytemplate = `
        <html>
            <body>
                <h1>${name}님의 인증번호</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>가입일: ${getToday()}</div>
                <div>인증번호: ${mynum}</div>
            </body>
        </html>
    `;
  axios.post("http://localhost:3000/temp", { certnum: mynum }).then((res) => {
    alert("cert number posted to ./temp");
  });
  return mytemplate;
  // console.log(mytemplate)
}

export async function sendTemplateToEmail(myemail, result) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gy255318@gmail.com",
      pass: "htcykxckpxbncmpz",
    },
  });

  const res = await transporter.sendMail({
    from: "gyxkfmzhvm4@gmail.com",
    to: myemail,
    subject: "인증번호",
    html: result,
  });

  console.log(res);
}
