const Sequelize = require('sequelize');
const db = require('../config/database');
const User = require('./User');
const Room = require('./Room')

const Booking = db.define('booking', {
    id : {
        type : Sequelize.INTEGER,
        primaryKey: true,
    },
    user_id : {
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
        type: Sequelize.TIME
    },
    updatedAt: {
        type: Sequelize.TIME
    },
});

// -------------- Relations -----------------
Booking.belongsTo(User, { foreignKey: 'user_id' })
Booking.belongsTo(Room, { foreignKey: 'room_id' })
// ----------- Custom -----------------------
Booking.relationList = [
    {
        model: User,
        as: 'user',
        where: {}
    },
    {
        model: Room,
        as: 'room',
        where: {}
    }
]


Booking.customList = {
    id: {
        as: 'ID'
    },
    amount: {
        as: 'Amount'
    },
    type:{
        as: 'Status'
    },
    user: {
        as: 'User'
    }
    
}
module.exports = Booking;