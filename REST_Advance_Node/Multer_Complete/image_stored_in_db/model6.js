const mongoose=require('mongoose');
const imageschema=new mongoose.Schema({
    img:{
        data:Buffer,
        content:String 
    },
    stringimg:String
})
module.exports=new mongoose.model('model6',imageschema);