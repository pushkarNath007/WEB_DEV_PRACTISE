require("../../mongoose/connectmongoose");
const model3=require("../model3");
const express=require('express');
const app=express();
app.get("/a*(b|c)?d/:id",async(req,res,next)=>{
    // /atyufgfguuhghgggbd will work too and b and c are optional
    model3.find({_id:req.params.id},{"_id":0,name:1},(err,data)=>{
        if(err) throw err;
        res.send(data);
    })
})
app.listen(9000);