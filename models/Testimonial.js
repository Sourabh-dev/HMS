const Sequelize = require('sequelize');
const db = require('../config/database');
const Testimonial = db.define('testimonial', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    user_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    occupation: {
        type: Sequelize.STRING,
        allowNull: true
    },
    media: {
        type: Sequelize.STRING,
        allowNull: true
    },
    active: {
        type: Sequelize.TINYINT
    },
});

module.exports = Testimonial;