const connect=require('./connect');
const express=require('express');
const { MongoErrorLabel } = require('mongodb');
const parser=require('body-parser');
// const router=express.Router();
const jsondata=parser.json();
const urldata=parser.urlencoded({extended:false});
const app=express();
app.get('/*/(:to)?-:from?$',async(req,res,next)=>{
    const data= await connect('datanew','model4');
     const result=await data.find({},{'_id':1}).toArray();
    //  result.exec((err,dat)=>{
    //     if(err) throw err;
    //     res.json(dat);
    //  })

    res.json(req.params.to);
})
app.post("/",jsondata,async(req,res,next)=>{
    const data= await connect('datanew','model4');
    const result=await data.insertOne(req.body);
    res.json(result);
})
app.listen(8000);


