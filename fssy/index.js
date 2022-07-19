const fs = require("fs");
// creating a  new file
fs.writeFileSync('read.txt',"welcome  to my first node app")
fs.writeFileSync('read.txt'," this is secong data welcome  to my first node app")


fs.appendFileSync('read.txt', " i have appended this daa")

const data_Read  = fs.readFileSync('read.txt');
// this wil gave Buffer data known as Binary Data

const orgDta = data_Read.toString();
console.log(orgDta);

