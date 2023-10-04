const connectdb=require('./connectmongo');
const mongodb=require('mongodb')
const express=require('express');
const app=express();



app.use(express.json());
app.post("/",async(req,res)=>{
    const data= await connectdb('datanew','product');
    const result=await data.insertMany(req.body);
    res.send(result);
})
app.get('/',async(req,res)=>{
    const data= await connectdb('datanew','product');
    const result=await data.find().toArray();
    res.send(result);
})

app.put("/:_id",async(req,res)=>{
    const data= await connectdb('datanew','product');
    const result=await data.updateOne({_id:req.params._id},{$set:req.body});
    res.send(result);
    console.log(req.params);
})
app.delete('/:_id',async(req,res)=>{
    const data= await connectdb('datanew','product');
    const result=await data.deleteOne({_id:new mongodb.ObjectId(req.params._id)},(err)=>{
        if(!err) throw "successfully done";
    });
})
app.listen(8000);