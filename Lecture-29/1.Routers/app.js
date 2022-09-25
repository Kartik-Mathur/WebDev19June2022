const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({extended: true}));
const teachersRoute = require('./routers/teachers');

app.use('/teachers',teachersRoute);
app.use('/students',require('./routers/students'));


app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
})