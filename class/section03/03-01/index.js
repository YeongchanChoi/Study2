// const express = require('express') 옛날 방식
import express from "express"; // 요즘 방식
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
aa;
