require('../../mongoose/connectmongoose');
const model=require('../../mongoose/model1_schema');
const express=require('express');
const {check,validationResult,matchedData,sanitizeBody}=require('express-validator');
const { application } = require('express');
const { MongoErrorLabel } = require('mongodb');
const app=express();

model.countDocuments({name:"aashish"},(err,data)=>{
    if(err) throw err;
    console.log(data);
})