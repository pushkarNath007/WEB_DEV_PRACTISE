
const express=require('express');
const app=express();
const path=require('path');
const filepath=path.join(__dirname,"static");
app.use(express.static(`${filepath}`));
app.set('views','static');

app.listen(8000,(err)=>{
    if(!err) console.log("succesfukkylauncged")
});