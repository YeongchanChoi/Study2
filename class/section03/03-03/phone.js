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
function sendTokenToSMS(myphone, result) {
  console.log(myphone + " 번호로 인증번호로 " + result + " 전송");
}

export function createTokenOfPhone(myphone) {
  const isValid = checkPhone(myphone);
  if (isValid) {
    const result = getToken();
    sendTokenToSMS(myphone, result);
  }
  getToken();
}
