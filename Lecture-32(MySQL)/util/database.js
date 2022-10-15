const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'shoppingCart',
    password: 'KartikM@1994'
});

module.exports = pool.promise(); 