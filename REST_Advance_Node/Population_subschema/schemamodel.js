const mongoose =require('mongoose');
mongoose.set('strictQuery', false);
const dogSchema=new mongoose.Schema({
    name:String,
    dogtype:String
});
const dog= new mongoose.model("Dog",dogSchema);
const ownerSchema=new mongoose.Schema({
    name:String,
    area:String,
    dogs:{type:mongoose.Types.ObjectId,ref:'Dog'},
    doggie:[{type:mongoose.Types.ObjectId,ref:"Dog"}]
});
const owner= new mongoose.model("Owner",ownerSchema);

module.exports={dog,owner};