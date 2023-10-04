const fs=require('fs');
const path=require('path');
const input=process.argv;
const filepath=path.join(__dirname,"fsfolder");
// fs.writeFile(`${filepath}/${input[2]}`,"this is for testing",(err)=>{
//     if(!err) console.log("successfully done");
// })
const readpath=path.join(__dirname,"fsfolder");
console.log(readpath)
// fs.readFile(`${readpath}/new.txt`,'utf-8',(err,data)=>{
//     console.log(data);
// })
// fs.appendFile(`${readpath}/new.txt`,"\n this is the new appended section",(err=>{
//    if(!err) console.log('succesfullly done'); 
// }))
// fs.rename(`${readpath}/new.txt`,`${readpath}/renamedbycrud.txt`,(err)=>{
//     if(!err) console.log("succesfully renamed");
// })
fs.unlinkSync(`${readpath}/new1.txt`);