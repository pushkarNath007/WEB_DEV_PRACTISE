const mongoose=require('mongoose');
const sch=new mongoose.Schema({
    username:{
        type:String,
        default:null,
        required:true,
        unique:true
    },
    password:{
        type:String,
        default:null,
        required:true,
    },
    gmail:{
        type:String,
        default:null,
        unique:true,
        required:true
    },
    mobile:{
        type:String,
        default:null,
        unique:true,
        required:true
    }
})
module.exports=new mongoose.model("model1",sch);