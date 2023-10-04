require("../../mongoose/connectmongoose");
const model3=require("../model3");
const express=require('express');
const app=express();
app.get("/ab*cd",async(req,res,next)=>{
    // /atyufgfguuhghgggbd will work too and b and c are optional
    res.send(req.params[0]);
})
app.listen(6000);