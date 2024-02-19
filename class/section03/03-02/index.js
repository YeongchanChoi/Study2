// const express = require('express') 옛날 방식
import express from "express"; // 요즘 방식
const app = express();

app.get("/qqq", function (req, res) {
  res.send("Hellos World");
});
app.listen(3000);
