const express=require('express');
const path=require("path");
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const parser=require('body-parser');
const app=express();
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'dist')));
app.set('views',path.join(__dirname,'views'));

// app.get("/demo",);