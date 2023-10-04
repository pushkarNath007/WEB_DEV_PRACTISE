const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/datanew");
const db=mongoose.connection;
db.on('open',()=>{
    console.log("connected with mongodb");
})
db.on('error',()=>{
    console.log("error");
})
db.on('close',()=>{
    console.log("closed");
})