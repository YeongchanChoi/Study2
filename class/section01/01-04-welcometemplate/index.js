const a = "gy2553@naver.com";
const isValid = a.includes("@");
console.log(isValid);

export function getWelcomeTemplate(name, age) {
  const mytemplate = `
    <html>
        <body>
            <h1>welcome, ${name}</h1>
            <hr/>
            <div>이름 : ${name}</div>
            <div>나이 : ${age}</div>
        </body>
    </html>
    `;
  console.log(mytemplate);
}
