const multer=require('multer');
const path=require('path');
const upload=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,"gallery"));
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname));
    }
});
 module.exports= multer({storage:upload});