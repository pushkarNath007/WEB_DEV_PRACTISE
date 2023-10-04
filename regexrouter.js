require('./mongoose/connectmongoose');
const model1=require('./mongoose/model1_schema');
const model3=require('./REST/model3');
const express=require('express');
const app=express();
// app.get('/:name([^0-9]{7})',async(req,res)=>{
//     const result=await model1.find({name:{$regex:req.params.name}});
//     res.send(result);
//     // console.log(req.params);
// })
const data3=model3.find({name:"vivek"});
app.get("/:name([^0-9]{7})",(req,res,next)=>{
    res.send(req.params.name);
    model3.find({name:{$regex:req.params.name}},(err,data)=>{
        if(err) throw err;
       res.status(200).send("data after this string"+data);
    })
    // data3.exec((err,dara)=>{
    //     res.send(dara);
    // })
})
// app.get("/:name([^0-9]{7})",(req,res,next)=>{
//     // res.send(req.params.name);
   
// })
app.listen(7000);