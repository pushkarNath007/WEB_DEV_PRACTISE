const mongoose=require('mongoose');
const sch= new mongoose.Schema({
    name:String,
    id:Number,
});
module.exports=new mongoose.model('model1',sch);