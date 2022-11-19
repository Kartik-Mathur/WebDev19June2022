const express = require('express');
const route = express.Router();

route.get('/',(req,res)=>{
    let funAllowedHai;
    console.log("Profile page after logout");
    if(req.session){
        
        funAllowedHai = req.session.funAllowedHai;
    }
    res.render('profile',{
        funAllowedHai: funAllowedHai
    });
})

module.exports = route;