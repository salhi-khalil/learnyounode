const fs = require('fs');
var filename = process.argv[2];
const str = fs.readFileSync(filename).toString();
console.log((str.split('\n').length-1))