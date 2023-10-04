require('dotenv').config();
const { JsonWebTokenError } = require('jsonwebtoken');
const mongoose=require('mongoose');
mongoose.connect(`${process.env.pl}://${process.env.LL}:27017/jwt`,(err)=>{
    if(err) console.error.bind(console,"error occured couldnt connect to database");
});
const db=mongoose.connection;
db.on('connected',()=>{
    console.log(' database connected');
})
db.on('close',()=>{
    console.log(' database closed');
})
db.on('error',()=>{
    console.log('database error');
})
