const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use('/',require('./apis/foodapi'));

app.listen(4444,()=>{
    console.log('server started at 4444');
})