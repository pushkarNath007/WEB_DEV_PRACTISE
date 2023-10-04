const express = require('express');
const model1=require('../model1');
// const bodyparser=require('body-parser');

const checking=(req,res,next)=>{
    console.log(req.body.username);
    const data= model1.findOne({username:req.body.username});
    data.exec((err,result)=>{
        if(err) throw err;
        else if(result==null) next();
        else res.send("hello there ")
    })
}
module.exports=checking;