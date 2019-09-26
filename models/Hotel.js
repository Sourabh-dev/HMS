const Sequelize = require('sequelize');
const db = require('../config/database');
const Hotel = db.define('hotel', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    active: {
        type: Sequelize.TINYINT,
        allowNull: false,
    },
    contact: {
        type: Sequelize.STRING
    }
});

module.exports = Hotel;