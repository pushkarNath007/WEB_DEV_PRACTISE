require("../../mongoose/connectmongoose");
const model4=require('./model4');
const express=require("express");
const path=require('path');
const {check,validationResult,sanitizeBody,matchedData}=require('express-validator')
const app=express();
const parser =require('body-parser');
// const { Db } = require("mongodb");
const urldata=parser.urlencoded({extended:false});
const jsondata=parser.json();
const formpath=path.join(__dirname,"../Bodyparser/form.html");
app.set("view engine","ejs");
const ejspath=path.join(__dirname,"../Bodyparser/ejs_folder");
app.set("views",`${ejspath}`);
// app.set(express.static('../Bodyparser'));
app.get("/",async(req,res,next)=>{
    res.sendFile(formpath,(err)=>{
        if(err) throw err;
        console.log("succesfully send");
    });
    
})
app.post("/",urldata,[
    check('phone','number should be correct').trim().isLength({min:10,max:11}),
],(req,res,next)=>{
    const errors=validationResult(req);
    console.log(errors);
    if(errors.isEmpty()){
        // const data=req.body;
        const result=new model4(req.body);
        result.total=req.body.salary*req.body.month;
        result.save((err,doc)=>{
            if(err) throw err;
            res.send("saved");
        })
    }
    else{
        res.send(`errors \n${errors}`);
        console.log("errors")
    }
})
app.listen(9000);