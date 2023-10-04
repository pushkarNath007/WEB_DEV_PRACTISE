require('dotenv').config();
const mongoose=require('mongoose');
const db=process.env.DB;
const ll=process.env.LL;
const PORT=process.env.PORT;
mongoose.connect(`${db}://${ll}:27017/authentication`,(err)=>{
    if(err) console.log(err);
});
const database=mongoose.connection;
database.on('connected',()=>{
    console.log("database connected");
})
database.on('close',()=>{
    console.log("database closed");
})
database.on('error',()=>{
    console.log("Unknown error occured database couldnt connected");
})

