const Sequelize = require('sequelize');
const db = require('../config/database');
const City = require('./City');
const Hotel = db.define('hotel', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    active: {
        type: Sequelize.TINYINT,
        allowNull: false,
    },
    contact: {
        type: Sequelize.STRING
    }
});
Hotel.belongsTo(City, { foreignKey: 'city_id' })

Hotel.relationList = [
    {
        model: City,
        as: 'city',
        where: {}     
    }
]
Hotel.customFieldList = {
    name: {
        type: 'Text',
        relation: '',
        placeholder: 'Name',
        label: 'Name',
        value: '',
    },
    city_id: {
        type: 'SingleSelect',
        relation: 'city',
        placeholder: 'City',
        label: 'City',
        value: '',
        relatedField: 'name',
        required: true,
        options: [],
    },
    address: {
        type: 'Textarea',
        relation: '',
        placeholder: 'Address',
        label: 'Address',
        value: '',
    },
    active: {
        type: 'Switch',
        relation: '',
        placeholder: 'Status',
        label: 'Status',
        value: '',
    },
    contact: {
        type: 'Text',
        relation: '',
        placeholder: 'Phone',
        label: 'Phone',
        value: '',
    }
}

Hotel.customList = {
    id: {
        as : 'ID'
    },
    name: {
        as : 'Name'
    },
    city_id: {
        as : 'City',
        relation : '',
        relatedField : 'name'
    }
}
module.exports = Hotel;