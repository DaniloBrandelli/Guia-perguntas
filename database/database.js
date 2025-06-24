const Sequelize = require ('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'danila',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;