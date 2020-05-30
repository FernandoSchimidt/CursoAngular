const Sequelize = require('sequelize');

const connection = new Sequelize('http_client', 'root', 'F3rn@nd0', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;