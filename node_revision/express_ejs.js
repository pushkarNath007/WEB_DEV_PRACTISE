const express=require("express");
const app=express();
const {MongoClient}=require('mongodb');
const ejs=require('ejs')
const client=new MongoClient('mongodb://localhost://27017');
const connectdb=async()=>{
    const alldb=await client.connect();
    const db=alldb.db('datanew');
    return db.collection('model1');
}
app.set('view engine','ejs');
app.set('views',`ejs_folder`);
app.get('/home',async(req,res)=>{
    const data= await connectdb();
    const rest=await data.find({}).toArray();
    const obj={
        name:"rishab",
        id:12
    }
    res.render("index",{rest});
})

app.listen(8000,(err)=>{
    if(!err) console.log("launche");
})