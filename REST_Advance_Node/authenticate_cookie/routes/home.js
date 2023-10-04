const express=require('express');
const router=express.Router();
const model1=require('../model1');
const verifytoken=require('../middlewares/verifytoken');
router.route("/home:_id?")
.get(verifytoken,(req,res,next)=>{
    const result=model1.findById(req.params._id);
    result.exec((err,answer)=>{
        if(err) res.send(err);
        // const data={
        //     username:answer.username,
        //     password:answer.password
        // }
        res.render("home");
        
    })
})
module.exports=router;