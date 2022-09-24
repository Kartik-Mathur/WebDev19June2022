const express = require('express');
const app = express();
let tasks = [];
const fs = require('fs');

app.use(express.urlencoded({extended:true}));
app.set('view engine','hbs');
// app.set('views','myviews');

app.get('/',(req,res)=>{
    fs.readFile(
        'mytasks.txt',
        {
            encoding:'utf-8'
        },
        (err,data)=>{
            if(err) return new Error('Error Aa gaya file mei read ke time');
            tasks = data.split('\n');
            console.log(data);
            res.render('index',{
                tasks
            })
        })
});

function writeInMyTasks(newTask){
    fs.writeFile('mytasks.txt',newTask,{
        flag:'a'
    },(err)=>{
        if(err) return new Error('Error Aa gaya file mei likhte time');
        console.log('Kaam done');
    })
}

app.post('/addtask',(req,res)=>{
    tasks.push(req.body.task);
    let newTask = req.body.task + '\n';
    writeInMyTasks(newTask);
    res.redirect('/');
})

app.listen(4444,()=>{
    console.log('http://localhost:4444');
})