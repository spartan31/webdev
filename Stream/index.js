const fs = require('fs')
const http = require('http')
const server  = http.createServer();

fs.writeFileSync('input.txt' , "Hello World This is first Stream service")

server.on("request",(req,res) => {
    // fs.readFile('input.txt' , (err,data)=>{
    //  if(err) return console.error(err);
    //  res.end(data.toString())
    // })
     const stream = fs.createReadStream("input.txt")
    // stream.on("data",(chunk)=>{
    //   res.write(chunk)
    // }) 
    // stream.on('end',()=>{
    //     res.end()
    // })
    // stream.on("error", (err) =>{
    //     console.log(err)
    //     res.end("file not found")
    // })

   stream.pipe(res);
})

server.listen(8080,"127.0.0.1");


