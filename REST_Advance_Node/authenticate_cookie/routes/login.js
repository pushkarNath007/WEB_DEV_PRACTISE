const express = require('express');
const { MongoGridFSChunkError } = require('mongodb');
const model1 = require('../model1');
const bcrypt = require('bcryptjs')
const router = express.Router();

router.route("/login")
    .get((req, res, next) => {
        res.render("login");
    })
    .post((req, res, next) => {
        console.log(req.body.username);
        model1.findOne({ username: req.body.username }, (err, result) => {
            console.log(result);
            if (err) throw err;
            if (result == null) res.redirect("/signup");
            else {
                req.mainid=result._id;
                console.log("login page->"+req.mainid);
                bcrypt.compare(req.body.password, result.password, (err, boolres) => {
                    console.log("point 2");
                    if (boolres) {
                        console.log("point3");
                        const token = result.authtoken();
                        console.log(token);
                        res.cookie('logintoken', token, {
                            expires: new Date(Date.now() + 300000),
                            httpOnly: true
                        })
                        req.token = token;// set token in req.user
                        // console.log("\ntokenid->"+result.tokens[0]._id);
                        const data = {
                            username: result.username,
                            password: result.password,
                        }
                        res.redirect("/home");

                        // console.log("\nthis is point 4->"+req.token);

                    }
                })
            }
        })
    })
module.exports = router;