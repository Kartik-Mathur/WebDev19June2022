const fs = require("fs");
const path = require('path');
const FileLocation = path.join(__dirname,'myFiles');

const file = path.join(FileLocation,'hello.txt');

fs.readFile(
    file,
    {
        encoding:'utf-8'
    }, 
    (err,data)=>{
        if(err){
            console.log(err.message);
            return;
        }
        console.log(data);
    }
)