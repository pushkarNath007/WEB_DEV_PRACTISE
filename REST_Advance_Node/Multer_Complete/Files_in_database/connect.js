const mongoose=require('mongoose');
 mongoose.connect("mongodb://localhost:27017/datanew");
 const db=mongoose.connection;
 db.on("connect",()=>{
    console.log('database connected');
 })
 db.on("disconnect",()=>{
    console.log('database disconnected');
 })
 db.on("error",()=>{
    console.log('error occured database didnt connect');
 })
 db.on("close",()=>{
    console.log('database closed');
 })

