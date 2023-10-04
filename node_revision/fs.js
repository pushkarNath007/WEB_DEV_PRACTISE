const fs=require('fs');
const path=require('path');
const input=process.argv;
const filepath=path.join(__dirname,"../fsfolder");
const writedata=()=>{
    fs.writeFile(`${filepath}/${input[2]}`,"this is a fs revison 2 text file",(err)=>{
        if(!err) console.log("successfully created");
    })
}
writedata();
fs.readFile(`${filepath}/${input[2]}`,'utf-8',(err,data)=>{
   if(!err) console.log(data);
})
//fs.appendFile()

console.log(filepath);