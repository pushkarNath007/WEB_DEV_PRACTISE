const express=require('express');
const app=express();

const jwt=require('jsonwebtoken');

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }
app.get("/login",(req,res,next)=>{
    const token = jwt.sign({val:"ans"},'logintoken');
    localStorage.setItem("mytoken",token);
    res.send("login succesfull");

});

const logincheck=(req,res,next)=>{
    const tokendata=localStorage.getItem('mytoken');
    try{
        jwt.verify(tokendata,"logintoken");
        next();
    }catch(err){
        res.send("please login the page first");
    }
    
}
app.get("/",logincheck,(req,res,next)=>{
    res.send("main page succesfullly executed");
})
app.get('/logout',(req,res,next)=>{
    localStorage.removeItem('mytoken');
    res.send("logout succesfully");
})

app.listen(7000);