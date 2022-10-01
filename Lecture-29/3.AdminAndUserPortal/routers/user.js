const Router = require('express').Router();
const {taskList} = require('./admin');

Router.get('/',(req,res)=>{
    res.render('user',{taskList});
})


module.exports = Router;