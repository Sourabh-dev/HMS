const Sequelize = require('sequelize');
const db = require('../config/database');
const Payment = db.define('payment', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    mode: {
        type: Sequelize.STRING
    },
    amount: {
        type: Sequelize.DOUBLE
    },
    booking_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    active: {
        type: Sequelize.TINYINT
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

module.exports = Payment;