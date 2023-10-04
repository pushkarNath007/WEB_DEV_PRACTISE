require("../Files_in_database/connect");
const model6=require('./model6');
const parser=require('body-parser');
const path=require('path');
const express=require('express');
const buffer=require('buffer/').Buffer;
const {check,validationResult,matchedData,sanitizeBody}=require('express-validator');
// const multer=require('multer');
const fs=require('fs');
const app=express();
const upload=require('./multer_middleware');
const { MongoErrorLabel } = require("mongodb");
const { type } = require("os");
app.use(parser.urlencoded({extended:false}));
app.use(parser.json());
app.set('view engine','ejs');
app.set("views",'./ejs_folder');
app.use(express.static(path.join(__dirname,"..","Files_in_database","image_folder")));

app.get("/",(req,res,next)=>{
    // console.log(path.join(__dirname,'..','Files_in_database','image_folder'));
    const data=model6.find({});

    data.exec((err,result)=>{
        if(err) throw err;
        console.log(result);
        // console.log(buffer.from(result.image, 'base64').toString('ascii'))
        // result.stringimg=stringdata;
        result.forEach((i)=>{
            const newdata=new buffer(i.img.data,'base64');
            const stringdata=newdata.toString('ascii')
            i.stringimg=stringdata;
            i.save((err,data)=>{
                if(err) throw err;
            })
        })
        res.render("form",{data:result});
        
    })
});
app.post("/",upload.single("image"),(req,res,next)=>{
    
    // const content_of_file="image"+ path.extname(req.file.originalname);
    // const newdata=new buffer(result.img.data,64);
    // const stringdata=newdata.toString('ascii')
    const ans={
        img:{
            data:req.file.filename,
            // fs.readFileSync(path.join(__dirname,'..','Files_in_database','image_folder')+"/"+req.file.filename),
            content:"image/png"
        }

    }
    model6.create(ans,(err,data)=>{
        if(err) throw err;
        //console.log(data);
        res.redirect("/");
    })
})
app.listen(9000);