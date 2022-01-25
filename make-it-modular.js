const filename = process.argv[2];
const ext = process.argv[3];
const mymodule = require("./mymodule");

mymodule(filename, ext, function(error, list) {
  if (error) return console.error(error);
  list.forEach(function (file) {
      console.log(file);
  });
});
