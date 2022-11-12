const express = require('express');
const route = express.Router();

route.get('/', (req, res, next) => {
    res.setHeader('Set-Cookie', 'fun=false');
    res.render('login');
});

route.get('/fun', (req, res, next) => {
    // console.log(req.get('Cookie'));
    const funAllowedHai = req.get('Cookie').split('=').pop();
    if (funAllowedHai == 'true')
        return res.send('Done ! Inside fun');
     res.redirect('/');
})

// route.post('/login',(req,res,next)=>{

// })

module.exports = route;