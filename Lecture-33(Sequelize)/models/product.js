const fs = require('fs');
const path = require('path');
const sequelize = require('../util/database');
const Sequelize = require('sequelize');

const Products = sequelize.define('products',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false
    },
    price:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    imageUrl:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Products;