const sequelize = require('sequelize');
const connection = require('./database/database');


//tabela
const Department = connection.define('departments', {
    name: {
        type: sequelize.STRING,
        allowNull: false
    }
});

//atualiza a base se true
Department.sync({
    force: false
}).then(() => {

});


module.exports = Department;
