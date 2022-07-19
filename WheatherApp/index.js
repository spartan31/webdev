const http = require('http')
const fs = require('fs')
var requests = require("requests")

const homefile = fs.readFileSync("home.html","utf-8")
const replaceVal = (tempVal , orgvsl) =>{
  var temperatur = tempVal.replace("{%temp%}",(orgvsl.main.temp - 273).toFixed(1))
  temperatur = temperatur.replace("{%tempCity%}",orgvsl.name)

  return temperatur;
}


const server = http.createServer((req,res) => {
    if(req.url == "/"){
       requests(
        "https://api.openweathermap.org/data/2.5/weather?q=Basti&appid=177add5195730567923b0522b2a732df"
        )
        .on('data',  (chunk)=> {
          const objData = JSON.parse(chunk)
          const arrData = [objData]
           const realtimedata = arrData.map(val => replaceVal(homefile,val)).join("")
          //  console.log(realtimedata)
           res.write(realtimedata)
        })
        .on('end', (err) => {
          if (err) return console.log('connection closed due to errors', err);
         
          console.log('end');
          res.end() ;
        })

    }else{
      res.end("File not found")
    }
})

server.listen(8080,"127.0.0.1");