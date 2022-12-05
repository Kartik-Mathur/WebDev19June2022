const passport = require('passport');
const Users = require('../database');
const route = require('express').Router();

route.get('/login', (req, res, next) => {
    console.log(req.session);
    console.log(req.user);
    if(req.user) return res.redirect('/profile');
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
    newUser.save().then((user)=>{
        console.log("Signup",user);
        res.redirect('/login');
    })
})

route.get('/profile',(req,res,next)=>{
    if(!req.user){
        console.log(req);
        return res.redirect('/login');
    }
    console.log(req.session);
    console.log(req.user);
    res.render('profile',{
        username: req.user.username
    });
})

route.get('/logout',(req,res,next)=>{
    req.logout((err)=>{
        if(err) return new Error("Dikat hai logout mei");
        res.redirect('/login');
    });
})
module.exports = route;