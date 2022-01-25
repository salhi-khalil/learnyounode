const fs = require('fs');
const path = require('path');

const filename = process.argv[2];
const ext= '.'+ process.argv[3];

fs.readdir(filename, function (error,list) {
    if (error) return console.error(error)
list.forEach(function (file){
    if (path.extname(file) === ext) {
        console.log(file)
    }
})
})

