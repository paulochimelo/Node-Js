const Sequelize = require('sequelize');
//const { default: ModelManager } = require('sequelize/types/lib/model-manager');

const connection = new Sequelize('guia', 'root', '12345678',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;