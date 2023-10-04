require("./connectmongoose");
const model1=require('./model1_schema');
const express=require('express');
const app=express();
const {EventEmitter} =require('events');
const alert=require('alert');

const event= new EventEmitter();
event.on("achar",()=>{
    alert("this is alert");
})

app.use(express.json());
// app.post("/",async(req,res)=>{
//     const data=new model1(req.body);
//     const result=await data.save();
//     res.send(result);
// })
app.post("/",async(req,res)=>{
    const data=await model1.collection.insertOne(req.body,);
    res.send(data);
    
})
app.get("/",async(req,res)=>{
    const data=await model1.find({
        name:"rishab"});
        event.emit("achar");
    res.send(data);
})
app.put("/:_id",async(req,res)=>{
    const data=await model1.updateOne({_id:req.params._id},{$set:req.body})
    res.status(200).send(data);
})
app.listen(9000);