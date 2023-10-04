const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/datanew');
const check=mongoose.connection;
check.on("open",()=>{
    console.log('mongodb successfully connected');
})
check.on("error",()=>{
    console.log('error occured mongodb doesnt connect');
})
