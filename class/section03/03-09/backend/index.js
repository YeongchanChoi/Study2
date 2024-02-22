// const express = require('express') 옛날 방식
import express from "express"; // 요즘 방식
import { createTokenOfPhone } from "./phone.js";

import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
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
app.post("/board", function (req, res) {
  //1. 브라우저에서 보내준 데이터 확인
  console.log(req);
  console.log("==================");
  console.log(req.body);

  //2. DB 접속 후, 데이터 저장

  //3. DB에 결과를 응답으로 주기
  res.send("게시물 등록 완료");
});
app.post("/token", function (req, res) {
  const phone = req.body.phone;
  createTokenOfPhone(phone);
  res.send("전송 완료");
});
app.listen(3000);
