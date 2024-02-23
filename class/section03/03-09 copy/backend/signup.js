function zzz() {
  const myphone = document.getElementById("myphone").value;
  console.log(myphone);
  axios
    .post("http://localhost:3000/token", {
      phone: myphone,
    })
    .then((res) => {
      console.log(res.data);
      document.getElementById("result").innerText = res.data;
    });
}
