require("../../mongoose/connectmongoose");
const model3 = require('../model3');
const bodyparser = require('body-parser');
const express = require('express');
const { check, validationResult } = require("express-validator");
const {matchedData,sanitizeBody}=require("express-validator");
const app = express();
const path=require('path');
const { error } = require("console");
app.set('view engine', 'ejs');
// const ejsfileview=path.join(__dirname,"../Bodyparser/ejs_folder")
app.set('views',"ejs_folder&form");
app.use(express.static('../Bodyparser'));
// body parser convert retrieved data into urlencoded
const urlencodeddata = bodyparser.urlencoded({ extended: false });
// body parser convert retrieved data into json
// app.use(bodyparser.json());/
const fielddata=path.join(__dirname,"../Bodyparser")
const jsondata = bodyparser.json();
app.get("/",async(req,res,next)=>{
    res.sendFile(`${fielddata}/form.html`);
})
app.post("/", urlencodeddata,[
    check('username','invalid username').trim().isLength({max:30,min:5}),
    check('password','invalid password').trim().isLength({max:30,min:5}),
    check('confirmpass').custom((value,{req})=>{
        if(value!=req.body.password)
            throw new Error("confirm password doesnot match the password");
            return true;
    }),
    check('gmail','invalid gmail').trim().isEmail().isLength({min:15})
], async (req, res, next) => {
    const errors=validationResult(req);
    // res.send(errors);
    // res.render('index',{title:"form data",errors});
    if(errors.isEmpty()){
        const data=matchedData(req);
        // all check will come in a object using matcheddata function
        res.render("ind",{title:"validation checking",data});
    }
    else{
    console.log(errors);
    console.log(errors.mapped());
    }
})
app.listen(8000);