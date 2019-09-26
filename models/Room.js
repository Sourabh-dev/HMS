const Sequelize = require('sequelize');
const db = require('../config/database');
const Room = db.define('room', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    type_id: {
        type: Sequelize.INTEGER
    },
    hotel_id: {
        type: Sequelize.INTEGER
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    accomodation: {
        type: Sequelize.STRING
    }
});

module.exports = Room;