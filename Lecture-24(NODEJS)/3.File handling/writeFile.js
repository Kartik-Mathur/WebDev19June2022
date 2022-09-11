const fs = require("fs");
const path = require('path');
const FileLocation = path.join(__dirname,'myFiles');

const file = path.join(FileLocation,'hello.txt');

fs.writeFile(
  file,
  "Hello World again!!",
  {
    encoding: "utf-8",
    flag: "a",
  },
  (err) => {
    if (err) {
      console.log("Issues with file writing "+err.message);
    } else {
      console.log("File written successfully");
    }
  }
);

console.log('Running addition function');
function add(){
    console.log(10+20);
}
add();