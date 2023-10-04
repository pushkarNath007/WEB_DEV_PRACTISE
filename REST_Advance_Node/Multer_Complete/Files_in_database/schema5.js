const mongoose=require('mongoose');
const sch=new mongoose.Schema({
    img:String
})

module.exports=new mongoose.model('model5',sch);
