const Sequelize = require('sequelize');
const db = require('../config/database');
const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ph_no: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    type: {
        type: Sequelize.ENUM,
        values: ['ADMIN', 'USER']
    },
    createdAt: {
        type: Sequelize.TIME
    },
    updatedAt: {
        type: Sequelize.TIME
    },
});
User.customList = {
    id: {
        as: 'ID'
    },
    email: {
        as: 'Name'
    },
    address: {
        as: 'Address'
   },
   ph_no:{
       as: 'Phone'
   }
}
User.extraWhere = {
    type: 'USER'
}

User.customFieldList = {
    email: {
        type: 'Email',
        relation: '',
        placeholder: 'Enter Email',
        label: 'Email',
        value: '',
        relatedField: '',
        options: [],
        required: true
    },
    password: {
        type: 'Password',
        relation: '',
        placeholder: 'Enter Password',
        label: 'Password',
        value: '',
        relatedField: '',
        options: [],
        required: true
    },
    address: {
        type: 'Textarea',
        relation: '',
        placeholder: 'Enter Address',
        label: 'Address',
        value: '',
        relatedField: '',
        options: [],
        required: true
    },
    ph_no : {
        type: 'Text',
        relation: '',
        placeholder: 'Enter Phone no',
        label: 'Phone',
        value: '',
        relatedField: '',
        options: [],
        required: true
    }
}
module.exports = User;