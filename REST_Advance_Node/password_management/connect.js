const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/password_management_project',(err)=>{
    if(err) console.error.bind(console,"database doesnt connected");
})
const db=mongoose.connection;
db.on("connected",()=>{
    console.warn("database connected");
})
db.on("disconnected",()=>{
    console.warn("database disconnected");
})
db.on("close",()=>{
    console.warn("database closed");
})
