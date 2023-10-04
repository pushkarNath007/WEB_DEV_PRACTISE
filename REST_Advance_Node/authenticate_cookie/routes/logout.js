const express = require('express');
const router = express.Router();
const model1 = require('../model1');
const login=require('./login');
router.route("/logout")
    .get((req, res, next) => {
        res.clearCookie('logintoken');
        // console.log(data);
        // const result=JSON.stringify(data);
        // console.log("logout page->\t"+result);
        console.log("logout page"+req.mainid);
        const result = model1.findOne(req.mainid);
        result.exec((err, data) => {
            if(err) res.send(err);
            data.tokens = data.tokens.filter((key) => {
                return key.token != req.token;
            })
            data.save((err, alldata) => {
                if (err) res.send("token couldnt deleted from db" + err);
                console.log("token deleted succesfully");
                res.redirect("/login");
            })
        })

    })
module.exports = router;