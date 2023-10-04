require('../mongoose/connectmongoose');
const model3=require('./model3');
const express=require('express');
// const { application } = require('express');
const app=express();
app.use(express.urlencoded());
app.patch("/:id",async(req,res,next)=>{
    model3.findById(req.params.id,(err,data)=>{
        if(err) throw err;
        data.password=req.body.id?req.body.id:data.password;
        data.save((err)=>{
            if(err) throw err;
            res.send("updated");
        })
    })
})
app.delete("/:id",async(req,res,next)=>{
    model3.findByIdAndRemove(req.params.id,(err)=>{
        if(err) throw err;
        res.send("deleted");
    })
})
app.listen(8000);