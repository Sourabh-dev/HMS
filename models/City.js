const Sequelize = require('sequelize');
const db = require('../config/database');
const City = db.define('city', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false,  // I do want timestamps here
});

City.customFieldList = {
    name : {
        type : 'Text',
        relation : '',
        placeholder : 'Enter Name',
        label : 'Name',
        value : '',
        relatedField : '',
        options : [],
        required : true
    },
}

City.customList = {
    id: {
        as: 'ID'
    },
    name : {
        as : 'Name'
    }
}
module.exports = City;