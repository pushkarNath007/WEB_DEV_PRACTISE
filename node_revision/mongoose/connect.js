const mongoose =require('mongoose')
mongoose.connect('mongodb://localhost:27017/datanew');
const db=mongoose.connection;
db.on('open',()=>{
    console.log("database connected");
})
db.on("error",()=>{
    console.log("not connected");
})
db.on("close",()=>{
    console.log("closed");
})

