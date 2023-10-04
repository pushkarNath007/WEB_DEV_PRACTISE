const mongoose=require('mongoose');
const date=new Date;
const data=date.toDateString();
const sch=new mongoose.Schema({
    name:String,
    password:String,
    Date:{
        type:String,
        default:data
    }
})
module.exports=new mongoose.model('model3',sch);