const express = require('express');
const Router = express.Router();
const students = [];


Router.get('/',(req,res)=>{
    res.send(students);
})

Router.post('/',(req,res)=>{
    students.push({
        name: req.body.name,
        roll: req.body.roll,
        marks: req.body.marks
    });
    res.redirect('/kids');
})


module.exports = Router;