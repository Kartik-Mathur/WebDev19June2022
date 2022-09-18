const express = require('express');
const app = express();
const PORT = 4444;
let tasks = [];
const path = require('path');
const fs = require('fs');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'static')));

function updateTasks(){
    let saareTasks;
    fs.readFile('tasks.txt',{
        encoding:'utf-8'
    },(err,data)=>{
        if(err) return console.log("File mei error aa gaya");

        saareTasks = data.split('\n');
        console.log(saareTasks);
        tasks = saareTasks
    })
}
updateTasks();

app.get('/gettasks',(req,res)=>{
    res.send(tasks);
})

function addTaskInFile(task){
    let str = '\n' + task + '\n';
    fs.writeFile('tasks.txt',str,{
        flag: 'a'
    },(err)=>{
        if(err){
            console.log('Dikkat ho gai');
        }
        else console.log('File written successfully');
    })
}

app.post('/addtask',(req,res)=>{
    tasks.push(req.body.name);
    addTaskInFile(req.body.name);
    console.log(tasks);
    res.redirect('/gettasks');
})

app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
})