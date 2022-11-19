const express = require('express');
const route = express.Router();

route.get('/', (req, res, next) => {
    req.session.funAllowedHai = true;
    res.render('login');
});


route.get('/fun', (req, res, next) => {
    let funAllowedHai = req.session.funAllowedHai;
    // console.log(req.session);
    // if (funAllowedHai == true)
        return res.render('profile',{
            funAllowedHai: funAllowedHai
        });
    //  res.redirect('/');
})

// route.post('/login',(req,res,next)=>{

// })

module.exports = route;