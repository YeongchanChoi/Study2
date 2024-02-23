// const express = require('express') 옛날 방식
import express from "express"; // 요즘 방식
import {
  checkEmail,
  getWelcomeTemplate,
  sendTemplateToEmail,
} from "./email.js";

import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import getToday from "./utils.js";
import cors from "cors";

const swaggerSpec = swaggerJsdoc(options);

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("/board", function (req, res) {
  //1. DB 접속 > 데이터 조회
  const result = [
    { number: 1, writer: "A", title: "title", content: "content" },
    { number: 2, writer: "B", title: "title", content: "content" },
    { number: 2, writer: "C", title: "title", content: "content" },
  ];
  //2. DB 결과 브라우저 응답

  res.send(result);
});

app.post("/users", (req, res) => {
  const { name, age, school, email } = req.body;

  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = checkEmail(email);
  if (isValid === false) return;

  // 2. 가입환영 템플릿 만들기
  const mytemplate = getWelcomeTemplate({ name, age, school });

  // 3. 이메일에 가입환영 템플릿 전송하기
  sendTemplateToEmail(email, mytemplate);
  res.send("전송완료");
});
app.listen(3000);
//cxdh cfff yyrz yglq
