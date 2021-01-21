import express from "express"; //const express = require("express");
const app = express();

const PORT = 4000;

const handleListening = (req,res) => console.log(`Listening on : http://localhost:${PORT}`);

const handleHome = (req,res) => res.send("Hi from Home!!");

const handleProfile =  (req, res) => res.send("You are on my profile"); // 바벨을 이용한 신코드 (js의 arrow function)
// 바벨은 신코드(ES6~)를 이용할 수 있게 해주며, 브라우저에서 동작할 때 신코드를 다시 구 코드로 변환해준다.
/* 구코드
function handleProfile(req,res){
    res.send("profile");
} */

app.get('/', handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);