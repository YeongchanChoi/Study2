// email.js

import nodemailer from "nodemailer";
import getToday from "./utils.js";
import dotenv from "dotenv";
export function checkEmail(myemail) {
  if (myemail === undefined || myemail.includes("@") === false) {
    console.log("에러 발생!!! 이메일 주소를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
  ``;
}

export function getWelcomeTemplate({ name, age, school }) {
  const mytemplate = `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>가입일: ${getToday()}</div>
            </body>
        </html>
    `;
  return mytemplate;
  // console.log(mytemplate)
}

export async function sendTemplateToEmail(myemail, result) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gy255318@gmail.com",
      pass: "htcy kxck pxbn cmpz",
    },
  });

  const res = await transporter.sendMail({
    from: "gyxkfmzhvm4@gmail.com",
    to: myemail,
    subject: "authorized2",
    html: result,
  });
  console.log(res);
}

// export const emailProcess=(email,name,age,school)=>{
//   if(checkEmail(email)){
//     const mytemplate=getWelcomeTemplate(name,age,school)
//   }

// }
