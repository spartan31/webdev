const fs = require('fs')
const data =  {
   name : "Krishan" ,
   age : 26 ,
   color : "brown",
   country : "NoOne"
}

 const json = JSON.stringify(data)
 const jtod = JSON.parse(json)
// console.log(json)
// console.log(jtod)

fs.writeFile('pra.json',json,(err)=>{
   console.log("done")
})

fs.readFile('pra.json',"utf-8",(err,da)=> {
   console.log(da)
   console.log(JSON.parse(da))
})
