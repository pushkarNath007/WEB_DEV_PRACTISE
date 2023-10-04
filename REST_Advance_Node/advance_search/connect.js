const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/datanew');
const db=mongoose.connection;
db.on('connected',()=>{
    console.log("connected with mongodb ");
})
db.on('error',()=>{
    console.log("connected with mongodb ");
})
db.on('disconnected',()=>{
    console.log("disconnected");
})
// db.watch().on("change",()=>{
//     console.log("database changes");
// })
