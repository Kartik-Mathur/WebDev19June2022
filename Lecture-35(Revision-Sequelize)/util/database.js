const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'newShoppingCart',
  'root',
  'KartikM@1994', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;