const express=require('express');
require("dotenv").config();
const app =express();
const nodemail=require('nodemailer');
const send_mail= async(req,res,next)=>{
    const mailer= await nodemail.createTransport({
      service:"hotmail",
        auth: {
          user:"21BCS6590@cuchd.in",
          pass: process.env.KEY,
        }
    })
    const sended= await mailer.sendMail({
        from:"21BCS6590@cuchd.in",
        to:"pushkarsharma9358@gmail.com",
        subject:"testing phase 1 2 3",
        text:"23455"
    },(err,data)=>{
        if(err) throw "not sended";
        res.send("done");
    })
}
app.use("/home",send_mail);
app.listen(80,(err)=>{
    if(err) throw "couldnt load page";
    console.log("loaded"); 
})