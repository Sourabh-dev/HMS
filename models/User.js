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
        type: Sequelize.String,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ph_no: {
        type: Sequelize.String,
        allowNull: true,
    },
    type: {
        type: Sequelize.ENUM,
        values: ['ADMIN', 'USER']
    },
    createdAt: {
        type: Sequelize.TIME,
        field: 'created_at'
    },
    updatedAt: {
        type: Sequelize.TIME,
        field: 'updated_at'
    },
});

module.exports = User;