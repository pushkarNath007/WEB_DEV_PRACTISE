// bodyparser convert retrieve data into urlencoded or json 
// bodyparser is work as a middleware it convert 
// and store it in req.body 
//  const varname=bodyparser.urlencoded({extended:false});
// and use this varname is a particular app.get or app.use 
// or create this function itself inside app.use for whole
// application to use bodyparser
require('../../mongoose/connectmongoose');
const model3=require('../model3');
const express=require('express');
// const { application } = require('express');
const parser=require('body-parser');
const path=require('path');
const fieldpath=path.join(__dirname);
const app=express();
// app.use(express.urlencoded());
app.use(express.static(__dirname));
app.set("view engine","ejs");
app.set("views","ejs_folder");
app.use(parser.urlencoded({extended: false}));
// app.use(parser.json());
app.get("/",(req,res,next)=>{
    res.sendFile(`${fieldpath}/form.html`);
    // res.render("ind",{title:"ejs checking",input:{username:"pushkar",password:"pushkar008###",gmail:"pushkagyu@56.com"}});
})
app.post("/",async(req,res,next)=>{
    const input=req.body;
    res.render("ind",{title:"ejs file ",input});
    // res.send(input);
    console.log(input);
})
app.listen(8000);
