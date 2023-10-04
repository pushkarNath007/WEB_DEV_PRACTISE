require('./connect');
const model4=require('../advance_model/model4');
const {check,validationResult,matchedData,sanitizeBody,u}=require('express-validator')
const express=require('express');
// const uniquevalidator=require("mongoose-unique-validator");
const alert=require('alert')
const app=express();
const router=express.Router();
const parser=require('body-parser');
const { ListIndexesCursor } = require('mongodb');
const { mongo, default: mongoose } = require('mongoose');
const urldata=parser.urlencoded({extended:false});
// const updatingpage=require('./Edit_router');
// model4.plugin(uniquevalidator);
const jsondata=parser.json();
app.set('view engine','ejs');
app.get('/',async(req,res,next)=>{
    res.render("main",{title:"advance_search",data:{username:null,password:null,gmail:null}});
});
// app.use('/chdugyugyuguyg',updatingpage)
app.post("/",urldata,[
    check("username","incorrect username please enter correct user name").trim().isLength({max:15}),
    check("password",["incorrect password please enter correct password name","first character cant be an integer value "]).trim().isLength({min:0,max:10}),
    check("gmail","incorrect gmail please enter correct gmail name").trim().isLength({max:40})

],async(req,res,next)=>{
    const errors=validationResult(req);
    if(errors.isEmpty()){
        const username=req.body.username;
        const password=req.body.password;
        const gmail=req.body.gmail;
        if(username!='' && password!='' && gmail!='' ){
            const alldata=model4.find({ $and:[
                {username:{$regex:req.body.username}},
                {$and:[{password:{$regex:req.body.password}},
                {gmail:{$regex:req.body.gmail}}]}
            ]});
            alldata.exec((err,data)=>{
                if(err) throw err;
                else if(data.length==0){
                    model4.find({ $or:[
                        {username:{$regex:req.body.username}},
                        {$or:[{password:{$regex:req.body.password}},
                        {gmail:{$regex:req.body.gmail}}]}
                    ]},(err,result)=>{
                        if(err) throw err;
                        console.log(result);
                        res.render("ans",{data:result});
                    });
                }
                else {console.log(result);
                    res.render("ans",{data:data});
                    }              
            })
        }
        else if((username!=''||password!='')||gmail!=''){
            const alldatas=model4.find({ $or:[
                {username:req.body.username},
                {$or:[{password:req.body.password},
                {gmail:req.body.gmail}]}
            ]});
            alldatas.exec((err,result)=>{
                if(err) throw err;
                else if(result.length==0) res.render("ans",{data:null});
                else{ 
                    // console.log(result);
                    res.render("ans",{data:result});}
            });
        }
        else{
            res.render("main",{title:"advance_search",data:{username:null,password:null,gmail:null}});
        }

    }
    else{
        const checkerr=errors.mapped();
        // console.log(checkerr);
        res.status(400).render("main",{title:"errors",data:checkerr});
    }

})
app.get("/update/*/:id/*",(req,res,next)=>{
   const data= model4.findById(req.params.id);
   data.exec((err,result)=>{
    if (err) throw err;
        res.render('updating',{data:result});
   })
})
app.get("/delete/*/:id/*",(req,res,next)=>{
   const data=model4.findByIdAndDelete(req.params.id);
   data.exec((err,data)=>{
    if(err) throw err;
        alert("deleted succesfully");
        res.redirect("/");
   })
})

app.post("/update",urldata,[
    check('password','please enter a valid username').isStrongPassword({minLength:6,
      minLowercase:1,
      minUppercase:1,
      minSymbols:1,
      minNumbers:1
    }),
    check('username','username already exists').trim().isLength({min:5}),
    // .custom((value,{req})=>{
    //    const data=model4.find({username:value});
    //    data.exec((err,result)=>{
    //         if(result.length==0) return true;
    //         return false;
    //    })
    // }),
    check('gmail','gmail already in use').trim().isEmail()
    // .custom((val,{req})=>{
    //     const data=model4.find({gmail:val});
    //     data.exec((err,result)=>{
    //          if(result.length==0) return true;
    //          return false;
    //     })
    // })
],(req,res,next)=>{
     const errors=validationResult(req);
     if(!errors.isEmpty()){
        const result=errors.mapped()//without map 
        //error wont be in key and value
        // console.log(result);
        // const name=result['username'].msg;
        // const  word=result['password'].msg;
        // const  mail=result['gmail'].msg;

        res.render("updating",{data:{
            username:"username incorrect",
            password:"password incorrect",
            gmail:"gmail incorrect"
        }});
        // console.log(errors.mapped());

     }
     else{
        const result=matchedData(req);
        // console.log(result);
        // console.log(req.body.id);
        const data =model4.findByIdAndUpdate(req.body.id,result);
        data.exec((err)=>{
            if(err) throw err;
            // console.log('updated');
            res.redirect("/");
        });
     }
})
app.get("*",(req,res,next)=>{
    res.redirect("/");
})
app.listen(8000);
