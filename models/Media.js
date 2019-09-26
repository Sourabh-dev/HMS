const Sequelize = require('sequelize');
const db = require('../config/database');
const Media = db.define('media', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    hotel_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mime_type: {
        type: Sequelize.STRING
    },
    active: {
        type: Sequelize.TINYINT
    }
});

module.exports = Media;