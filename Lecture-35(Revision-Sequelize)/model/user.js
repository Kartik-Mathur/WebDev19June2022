const Sequelize  = require('sequelize');
const sequelize  = require('../util/database');

const User = sequelize.define('users',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports  = User;