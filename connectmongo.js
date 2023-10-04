const express=require('express');
const path =require('path');
const {MongoClient}= require('mongodb');
const client=new MongoClient('mongodb://localhost://27010');
const connectdb= async(dbname,clname)=>{
    const alldb=await client.connect();
    const db=alldb.db(dbname);
    return db.collection(clname);
}
module.exports=connectdb;