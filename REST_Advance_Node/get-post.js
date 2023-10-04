require('../mongoose/connectmongoose');
const model3=require('./model3');
const express=require('express');
// const { application } = require('express');
const app=express();
app.use(express.json());
app.post('/',async(req,res,next)=>{
    const result=new model3(req.body);
    result.save((err,doc)=>{
        if(err) throw err;
        res.send("data saved");
    })
})
app.get("/",(req,res,next)=>{
    model3.find({name:"vivek"},{'name':1,'_id':0},(err,data)=>{
        if(err) throw err;
        res.send(data);
    })
})
app.listen(9000,function(err){
    if(err) throw err;
   console.log("succesfuklyy launched at 8000");
})

