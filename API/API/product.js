const sequelize = require('sequelize');
const connection = require('./database/database');
const department = require('./department');

//Tabela
const Product = connection.define('products', {
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    price: {
        type: sequelize.NUMBER,
        allowNull: false
    },
    stock: {
        type: sequelize.NUMBER,
        allowNull: false
    }
});
//realcionamento

//1 para muitos
department.hasMany(Product);

Product.belongsTo(department)

//atualiza a base se true
Product.sync({
    force: false
}).then(() => {

});

module.exports = Product;