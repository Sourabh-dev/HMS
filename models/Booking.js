const Sequelize = require('sequelize');
const db = require('../config/database');
const Booking = db.define('booking', {
    id : {
        type : Sequelize.INTEGER,
        primaryKey: true,
    },
    user_id : {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    hotel_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    room_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    check_in: {
        type: Sequelize.TIME
    },
    check_out: {
        type: Sequelize.TIME
    },
    payment_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    amount: {
        type: Sequelize.DOUBLE
    },
    type: {
        type: Sequelize.ENUM,
        values: ['BOOKED', 'PAID', 'CANCELLED', 'REFUND']
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

module.exports = Booking;