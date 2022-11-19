const express = require('express');
const session = require('express-session');
const app = express();
const MongoDBStore = require('connect-mongodb-session')(session);
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/connect_mongodb_session_test',
    collection: 'sessions'
});

app.use(session({
    secret: 'adjkasdjkavdabm ma ',
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        maxAge: 60 * 60 * 24 * 1000
    }
}))
app.set('view engine', 'hbs');

const allRoutes = require('./routes/routes');
// PASSPORT///////////////////////////////////////



// ROUTES ////////////////////////////////////////
app.use('/', allRoutes);

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
})