const express = require('express');
const Router = express.Router();
const teachers = [];

Router.get('/',(req,res)=>{
    res.send(teachers);
});

Router.post('/',(req,res)=>{
    teachers.push({
        name: req.body.name,
        subject: req.body.subject
    });
    res.redirect('/teachers');
});

module.exports = Router;