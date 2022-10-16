const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'shoppingCart',
    'root',
    'KartikM@1994', {
    host: 'localhost',
    dialect: 'mysql'
}
);

module.exports = sequelize;