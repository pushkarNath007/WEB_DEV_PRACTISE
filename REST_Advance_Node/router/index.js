const express=require('express');
const routing=require('./route');
const app=express();
app.use("/home",routing);
app.listen(8000);