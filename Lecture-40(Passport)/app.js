const express = require('express');
const session = require('express-session');
const app = express();
const passport = require('passport');
const MongoDBStore = require('connect-mongodb-session')(session);


const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/mydb',
    collection: 'sessions'
});

app.use(session({
    secret: 'adjkasdjkavdabm ma ',
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        maxAge: 6000
    }
}))


app.set('view engine', 'hbs');

const allRoutes = require('./routes/routes');

// PASSPORT///////////////////////////////////////
app.use(passport.initialize());
app.use(passport.session());

require('./passport');


// ROUTES ////////////////////////////////////////
app.use('/', allRoutes);


app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
})