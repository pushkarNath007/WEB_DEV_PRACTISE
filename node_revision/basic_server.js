const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.write("<h1> this is a server page</h1>");
    res.end();
}).listen(8000,(err)=>{
    if(!err) console.log("successfully launched");
})