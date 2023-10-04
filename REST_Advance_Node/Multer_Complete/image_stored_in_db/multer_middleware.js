const { Db } = require('mongodb');
const { default: mongoose } = require('mongoose');
const multer=require('multer');
const path=require('path');
const check=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'..',"Files_in_database","image_folder"));
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
})
module.exports=multer({storage:check});