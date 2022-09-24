const express = require('express');
const app = express();

app.set('view engine','hbs');

app.get('/',(req,res)=>{
    res.render('index',{
        title: 'HBS',
        subjects: ['English','C++','Java','Python','Data Science'],
        show: true
    });
})


app.listen(4444,()=>{
    console.log('http://localhost:4444');
});