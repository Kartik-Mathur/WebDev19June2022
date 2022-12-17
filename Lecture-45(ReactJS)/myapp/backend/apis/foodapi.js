const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Food = require('../model/db');
mongoose.connect(
    'mongodb://localhost:27017/myfoodapp-17dec'
).then(()=>{
    console.log('DB Connected');
}).catch((e)=>{
    console.log(e);
})

router.get('/getAllFood',async (req,res,next)=>{
    const food = await Food.find({});
    console.log(food);
    res.status(200).json(food);
})

module.exports = router;