const Sequelize = require('sequelize');
const db = require('../config/database');
const Type = db.define('type', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = Type;