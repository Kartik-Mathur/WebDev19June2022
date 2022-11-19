const route = require('express').Router();

route.get('/login', (req, res, next) => {
    res.render('login');
})


module.exports = route;