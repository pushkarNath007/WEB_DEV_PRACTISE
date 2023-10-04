require('./connectdb');
const model1=require('./model1');
const express=require('express');
const app=express();
app.get("/search/:name",async(req,res)=>{
    const data=await model1.find({'$or':[
        {name:{$regex:req.params.name}},
        {name:{$regex:req.params.name}}
    ]})
    res.send(data);
}).listen(6000);