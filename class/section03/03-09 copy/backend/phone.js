import coolsms from "coolsms-node-sdk";
import dotenv from "dotenv";
dotenv.config();

const mysms = coolsms.default;

function checkPhone(myphone) {
  if (myphone.length == 11) {
    return true;
  } else {
    return false;
  }
}
function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  return result;
}
function sendTokenToSMS(myPhone, result) {
  const messageService = new mysms(process.env.API_ID, process.env.API_KEY);
  messageService.sendOne({
    to: myPhone,
    from: myPhone,
    text: `[인증번호 :${result}]`,
  });
  console.log(myPhone + " 번호로 인증번호로 " + result + " 전송");
}

export function createTokenOfPhone(myPhone) {
  const isValid = checkPhone(myPhone);
  if (isValid) {
    const result = getToken();
    sendTokenToSMS(myPhone, result);
  }
  getToken();
}
//쿨에스엠에스
