require('./connect');
const model2=require('./model2');
const express=require('express');
const alert=require('alert');
const app=express();
const mongodb=require('mongodb');
const {EventEmitter} =require('events');
const event=new EventEmitter();
event.on('mouseover',()=>{
    alert("mouseover");
})
app.use(express.json());
app.get("/",async(req,res)=>{
    const result=await model2.find();
    res.send(result);
    event.emit('mouseover');
})
// app.post('/',async(req,res)=>{
//     await model2.collection.insertOne(req.body,(err)=>{
//         if(!err) alert("inserted");
//     });
    
// })
// app.put("/:_id",async(req,res)=>{
//      const result=await model2.updateOne({_id:req.params._id},{$set:req.body});
//      res.send(result);
// })
// app.delete("/:_id",async(req,res)=>{
//    const result=await model2.deleteOne({_id:new mongodb.ObjectId(req.params._id)})
//    res.send(result);
// })
app.listen(9000,(err)=>{
    if(!err)  console.log("connected");
});