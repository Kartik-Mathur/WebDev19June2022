const express = require('express');
const app = express();
const PORT = 4444;
const session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);

store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/connect_mongodb_session_test',
    collection: 'Sessions'
});

app.use(session({
    secret: 'abhadan lasdasbdjasdb,as',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

const loginRouter = require('./routes/login');
const profileRouter = require('./routes/profile');
app.get('/logout', (req, res) => {
    req.session
        .destroy(()=>{
            return res.redirect('/profile')
        })
})
app.use('/', loginRouter);
app.use('/profile', profileRouter);

app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
})