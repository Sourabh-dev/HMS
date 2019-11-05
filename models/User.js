const Sequelize = require('sequelize');
const db = require('../config/database');
const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ph_no: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    type: {
        type: Sequelize.ENUM,
        values: ['ADMIN', 'USER']
    },
    createdAt: {
        type: Sequelize.TIME
    },
    updatedAt: {
        type: Sequelize.TIME
    },
});

module.exports = User;