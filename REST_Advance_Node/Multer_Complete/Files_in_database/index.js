require('./connect');
const model5 = require('./schema5');
const upload = require('./multer_middleware');
const express = require('express')
const { check, validationResult, matchedData, sanitizeBody } = require('express-validator')
const path = require('path');
const parser = require('body-parser');
const { json } = require('body-parser');
const { default: mongoose } = require('mongoose');
// const router=express.Router();
const app = express();

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use(express.static(path.join(__dirname, "image_folder")));
app.set('view engine', 'ejs');
app.set('views', 'ejs_folder');
app.get("/", (req, res, next) => {
    
    const data = model5.find({});
    data.exec((err, result) => {
        if (err) throw err;
        else if (result.length > 0) {
            console.log(result);
            console.log(__dirname);
            res.render("form", { data: result});
        }
        else res.render("form", { data: {img:null} });
    })
})
app.post("/", upload.single('img'), (req, res, next) => {
    // const imgname=req.file.filename;
    // res.send(`{imgname} succesfully uploaded`);
    // console.log(req.body);
    console.log(req.file);
    const data = model5.create({ img: req.file.filename }, (err, result) => {
        if (err) throw err;
        console.log(result.img);
        res.redirect("/");
    });
})
// app.delete("/delete",(req,res,next)=>{
//    const data= model5.deleteOneAndDelete({img:
//         "img_1665243103255.png"});
//         data.exec((err,result)=>{
//             if(err) throw err;
//             res.send(result);
//         })
// });

// mongoose.models.path('img').get(value,(err,data)=>{
//     console.log(data);
// })
app.listen(5000);

