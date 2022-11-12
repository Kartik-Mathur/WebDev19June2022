const express = require('express');
const route = express.Router();

route.get('/', (req, res, next) => {
    req.session.funAllowedHai = false;
    res.render('login');
});

route.get('/fun', (req, res, next) => {
    let funAllowedHai = req.session.funAllowedHai;
    console.log(req.session);
    if (funAllowedHai == true)
        return res.send('Done ! Inside fun');
     res.redirect('/');
})

// route.post('/login',(req,res,next)=>{

// })

module.exports = route;