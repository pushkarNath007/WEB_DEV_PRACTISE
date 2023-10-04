require('dotenv').config;
require('./connect');
const cookieparser=require('cookie-parser');
const model1=require('./model1');

const express=require('express');
// const { Db } = require('mongodb');
const app=express();

//  async function func(){const data=await model1.countDocument()
//     console.log(data);
// }
if(typeof localStorage==='undefined'||localStorage===null){
    const {LocalStorage} = require('node-localstorage');
    localStorage=new LocalStorage('./scratch');
}

app.post('/',async(req,res,next)=>{
    const data=new model1({
        name:"Pushkar nath",
        password:"Pa1234@#"
    })
    // console.log(data.Authtoken());
    const token=data.Authtoken();
    localStorage.setItem('token',token);
    res.cookie('token',token,{
        expires: '1d',
        httpOnly:true,
        // maxAge:6*50*50*1000
    })
    data.save((err,result)=>{
        if(err) throw err;
        // console.log(result);
    })
    
})
app.listen(process.env.port);

