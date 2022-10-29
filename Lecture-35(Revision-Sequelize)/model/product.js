const Sequelize = require('sequelize');
const db = require('../util/database');

const Products =  db.define('products',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING
    }
})

module.exports = Products;