const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cp = require("cookie-parser");

const PORT = 8000;

// import events from data.js
const data= require("./workshop.js");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
const path=require('path');
app.set('views',`${__dirname}`);
app.use(cp("secret"));
app.use(express.static(path.join(__dirname,"images")));
app.get('/home',(req,res)=>{
    res.render('workshop',{event:data});
})
app.listen(PORT);