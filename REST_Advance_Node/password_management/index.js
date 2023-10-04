require('./connect');
const model1=require('./model1');
const express=require('express');
const {check,matchedData,validationResult,sanitizeBody} =require('express-validator');
const path=require("path");
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const parser=require('body-parser');
const app=express();
app.use(parser.urlencoded({extended:false}));
app.use(parser.json());
// console.log(__dirname)
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'dist')));
app.set('views',path.join(__dirname,'views'));
// app.use(express.static(path.join(__dirname,"src")));

if(typeof localStorage==='undefined'||localStorage===null){
    const {LocalStorage}=require('node-localstorage');
     localStorage=new LocalStorage('./scratch');
}
app.get("/login",(req,res,next)=>{
    res.render("login",{});
})
app.listen(8000,(err)=>{
    if(err) throw err;
    console.log("succesfully launched");
});
