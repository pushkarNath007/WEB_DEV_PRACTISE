const jwt=require('jsonwebtoken');
const model1=require('../model1');
const cookieparser=require('cookie-parser');
const { json } = require('body-parser');
const authentication=(req,res,next)=>{
    try{
        console.log("\nauthtoken part 1->"+req.cookies.logintoken)
        const token=req.cookies.logintoken;
        req.user=jwt.verify(token,process.env.SECRET_KEY);
        console.log("\nauthentication\t"+JSON.stringify(req.user));
        req.tokenid=req.user._id;
        // req.user=token_id_data;
        console.log(req.tokenid);
        next()
    }catch(error){
        console.log("error here in auth");
        res.send(error);
    }
}
module.exports=authentication;