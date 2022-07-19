const fs = require('fs')

const obj = JSON.parse(fs.readFileSync('api.json',"utf-8"));
console.log(obj.data)