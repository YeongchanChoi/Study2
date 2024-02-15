function createTokenOfPhone(qqq) {
  if (qqq.length == 11) {
    let a = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    console.log(a);
  } else {
    console.log("Wrong number");
  }
}
createTokenOfPhone("01092625413");
