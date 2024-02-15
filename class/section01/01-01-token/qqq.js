console.log(1);
getToken();
function getToken() {
  let a = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(a);
}
