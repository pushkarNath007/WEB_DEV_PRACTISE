const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
require('dotenv').config();
const sch=new mongoose.Schema({
    username:{
        type:String,
        default:null,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String
        }
    }
    ],
    img:{
        data:Buffer,
        content:String
    }
});
sch.methods.authtoken=function(){
    const token=jwt.sign({_id:this._id},process.env.SECRET_KEY)
    // console.log("special point"+token);
    // console.log("authtoken token id"+token._id);
    this.tokens=this.tokens.concat({token});
    this.save((err,tokenres)=>{
        if(err) throw err;
        console.log("token saved");
    })
    return token;
}
sch.pre('save',function(next){
    if(this.isModified('password')){//when insert or update
        this.password=bcrypt.hashSync(this.password,this.password.toString().length);
    }
    next();
})
module.exports=new mongoose.model('userdatas',sch);

