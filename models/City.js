const Sequelize = require('sequelize');
const db = require('../config/database');
const City = db.define('city', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = City;