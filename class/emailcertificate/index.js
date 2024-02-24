import express from "express";
import axios from "axios";
import {
  checkEmail,
  getWelcomeTemplate,
  sendTemplateToEmail,
} from "./email.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.get("/test", function (req, res) {
  res.send("connected");
});
app.post("/email", (req, res) => {
  const { name, email } = req.body;

  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = checkEmail(email);
  if (isValid === false) return;

  // 2. 인증 템플릿 만들기
  const mytemplate = getWelcomeTemplate(name);

  // 3. 이메일에 인증 템플릿 전송하기
  sendTemplateToEmail(email, mytemplate);
  res.send("전송완료");
});
app.post("/temp", (req, res) => {
  const { certnum } = req.body;
});

app.listen(3000);
