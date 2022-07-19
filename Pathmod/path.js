const pa = require('path')

console.log(pa.dirname('C:/Users/krish/Documents/Web Dev/Node/Pathmod/path.js'))


const mypath = pa.parse('C:/Users/krish/Documents/Web Dev/Node/Pathmod/path.js')

console.log(mypath.name)