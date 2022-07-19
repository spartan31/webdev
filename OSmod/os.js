const os = require("os")

console.log(os.arch())
const freememory = os.freemem()
console.log(`${freememory/1024/1024/1024}` +" \\ " + `${os.totalmem()/1024/1024/1024}`)

console.log(os.hostname());

// console.log(os.cpus())
console.log(os.platform())