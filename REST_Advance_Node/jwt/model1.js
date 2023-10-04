const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const sch=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        default:null
    },
    password:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }   
    }]
})
sch.methods.Authtoken=async function(){
    const token=jwt.sign({_id:this._id},"this is your token",{
        expiresIn:'20d'
    });
    // await this.save();
    return token;
}
sch.pre('save',function(next){
    if(this.isModified('password')){
        this.password=bcrypt.hashSync(this.password,this.password.toString().length);
    }
    next();
})

// const model1=new mongoose.model('details',sch);
module.exports=new mongoose.model('details',sch);