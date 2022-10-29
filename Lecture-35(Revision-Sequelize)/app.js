const express = require('express');
const app = express();
const PORT = 4444;
const path = require('path');
const sequelize = require('./util/database');
const Products = require('./model/product');
const User = require('./model/user');

const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    User
        .findByPk(1)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err=>console.log(err));
})
app.set('view engine', 'hbs');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use('/admin', adminRouter);
app.use('/', shopRouter);


User.hasMany(Products, { onDelete: 'CASCADE' });
Products.belongsTo(User);


sequelize
    // .sync({force: true})
    .sync()
    .then(() => {
        return User.create({
            name: 'Kartik',
            email: 'km@cb.lk'
        });
    }).then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        })
    })
    .catch((err) => console.log(err));
