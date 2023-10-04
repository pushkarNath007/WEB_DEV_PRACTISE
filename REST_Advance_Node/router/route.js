const express=require('express');
const router=express.Router();
router.route("/about").get((req,res,next)=>{
    res.send("<h1> this is checking</h1>")
})

module.exports=router;