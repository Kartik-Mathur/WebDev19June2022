const passport = require('passport');
const Users = require('../database');
const route = require('express').Router();

route.get('/login', (req, res, next) => {
    console.log(req.session);
    console.log(req.user);
    res.render('login');
})

route.post('/login',passport.authenticate('local',{
    failureRedirect: '/login',
    successRedirect: '/profile'
}))

route.get('/signup',(req,res,next)=>{
    res.render('signup');
})

route.post('/signup',(req,res,next)=>{
    let newUser = new Users({
        username: req.body.username,
        password: req.body.password
    });
    newUser.save((err)=>{
        if(err) return new Error("Signup nhi ho paaya");
        res.redirect('/login');
    })
})

route.get('/profile',(req,res,next)=>{
    console.log(req.session);
    console.log(req.user);
    res.send("Welcome to the portal");
})
module.exports = route;