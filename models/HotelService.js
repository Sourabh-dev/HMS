const Sequelize = require('sequelize');
const db = require('../config/database');
const HotelService = db.define('hotel_service', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    service_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    hotel_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE
    },
});

module.exports = HotelService;