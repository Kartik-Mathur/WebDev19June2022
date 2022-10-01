const Router = require('express').Router();
const admins=['kartik','monu'];
const taskList = [];

Router.get('/',(req,res)=>{
    res.render('admin',{
        taskList
    });
})

Router.post('/',(req,res)=>{
    if(admins.indexOf(req.body.name) != -1){
        taskList.push(req.body.newtask);
    }
    res.redirect('/admin');
})

module.exports.Router = Router;
module.exports.taskList = taskList;