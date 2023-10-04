const express = require('express');
const model1 = require('../model1');
const checkingusername = require('../middlewares/preexisting_data');
const fs = require('fs')
const multer = require('multer');
const uploadimg = require('../multer_middleware');
const { check, validationResult, matchedData, sanitizeBody } = require('express-validator');
const path = require('path');
const busboy = require('connect-busboy');
// const multer = require('multer');
const router = express.Router();
router.use(busboy());
const bodyparser=require('body-parser');
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended:false}));

router.route('/signup')
    .get((req, res, next) => {
        res.render('signup');
    })
    .post(  uploadimg.single('userfile'),[
        check('password', 'please enter strong password').isStrongPassword({
         minLength:1,
         minNumbers:1,
         minSymbols:1
        })
    ], checkingusername,(req, res, next) => {
        const errors = validationResult(req);
        console.log("point1");
        if (!errors.isEmpty()) {
            console.log("point2");
            console.log(errors.mapped());
            res.redirect("/signup");
        }
        else {
            console.log(req.body.username);
            const datas = {
                
            }
            model1.create({username:req.body.username,
                password:req.body.password,
                img: {
                    data: req.file.filename,
                    content: `image/png`
                }},(err,result)=>{
                if(err) throw err;
                res.redirect("/login");
            })
        }
    })
module.exports = router;