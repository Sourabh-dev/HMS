const Sequelize = require('sequelize');
const db = require('../config/database');
const Service = db.define('service', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    timestamps: false,  // I do want timestamps here
});

Service.customList = {
    id: {
        as: 'ID'
    },
    name: {
        as: 'Name'
    }
}
module.exports = Service;