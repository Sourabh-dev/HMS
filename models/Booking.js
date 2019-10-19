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

Booking.customFieldList = {
    name: {
        type: 'Text',
        relation: '',
        placeholder: 'Name',
        label: 'Name',
        value: '',
        relatedField: '',
        options: [],
        required: true
    },
    user_id: {
        type: 'Text',
        relation: 'user',
        placeholder: 'Customer',
        label: 'Customer',
        value: '',
        relatedField: 'name',
        required: true,
        options: [],
    },
    hotel_id: {
        type: 'Text',
        relation: 'hotel',
        placeholder: 'Name of Hotel',
        label: 'Name of Hotel',
        value: '',
        relatedField: 'name',
        required: true,
        options: [],
    },
    room_id: {
        type: 'Text',
        relation: 'room',
        placeholder: 'Name of Room',
        label: 'Name of Room',
        value: '',
        relatedField: 'name',
        required: true,
        options: [],
    },
    check_in: {
        type: 'DatePicker',
        relation: '',
        placeholder: 'Checked In',
        label: 'Checked In',
        value: '',
    },
    check_out: {
        type: 'DatePicker',
        relation: '',
        placeholder: 'Checked Out',
        label: 'Checked Out',
        value: '',
    },
    payment_id: {
        type: 'Text',
        relation: 'payment',
        placeholder: 'Payment',
        label: 'Payment',
        value: '',
        relatedField: 'ammount',
        required: true,
        options: [],
    },
    amount: {
        type: 'Number',
        relation: '',
        placeholder: 'Amount',
        label: 'Amount',
        value: '',
    },
    type: {
        type: 'SingleSelect',
        label: 'Type of Room',
        value: '',
        required: true,
        options: ['BOOKED', 'PAID', 'CANCELLED', 'REFUND']
    }
}

module.exports = Booking;