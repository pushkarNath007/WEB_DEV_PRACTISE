require("../../mongoose/connectmongoose");
const model3=require("../model3");
const express=require('express');
const app=express();
app.get("/a*(b|c)?d/:to-:from",async(req,res,next)=>{
    //   /aaaaabd ->working
    //   /aaacd->working 
    model3.find({"$or":[
        {name:{$regex:req.params.to}},
        {name:{$regex:req.params.from}}
    ]},{"_id":0,name:1},(err,data)=>{
        if(err) throw err;
        res.send(data);
    })
})
app.listen(9000);