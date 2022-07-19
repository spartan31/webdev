const { Console } = require('console')
const http = require('http')
const { runInNewContext } = require('vm')
 const server  = http.createServer((req,res) =>{
    if(req.url == "/contact"){
     res.end("This is Contact Us Page")
    }else if(req.url == "/home/suraj"){
      res.write(" Update this for latest pGE ")
      res.end("<h1>HEllo from the Suraj Ka side side<h1>")
      // res.end() ;
    }else{
      res.writeHead(404,{"content-type" : "text/html"})     
      res.end("Error 404 node respond")
    }
 })

 server.listen(8080,"127.0.0.1", () => {
    console.log("Listening to server");
 })