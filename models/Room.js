const Sequelize = require('sequelize');
const db = require('../config/database');
const Room = db.define('room', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    number: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    accommodation: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.ENUM('A/C', 'Non A/C')
    },
    image: {
        type: Sequelize.STRING
    }
},{
    timestamps: false,  // I do want timestamps here
});

Room.customFieldList = {
    number: {
        type: 'Number',
        relation: '',
        placeholder: 'Enter Room Number',
        label: 'Room Number',
        value: '',
        relatedField: '',
        options: [],
        required: true
    },
    description: {
        type: 'Textarea',
        relation: '',
        placeholder: 'Enter Description',
        label: 'Description',
        value: '',
        relatedField: '',
        options: [],
        required: true
    },
    price: {
        type: 'Number',
        relation: '',
        placeholder: 'Enter Price for a day',
        label: 'Price (₹)',
        value: '',
        relatedField: '',
        options: [],
        required: true
    },
    accommodation: {
        type: 'Select',
        relation: '',
        placeholder: 'Choose Accomodation',
        label: 'Accomodation',
        value: '',
        relatedField: '',
        options: [
            {
                id: 1,
                value: '1'
            },
            {
                id: 2,
                value: '2'
            },
            {
                id: 4,
                value: '4'
            }
        ],
        required: true
    },
    type: {
        type: 'Select',
        relation: '',
        placeholder: 'Choose Type',
        label: 'Type',
        value: '',
        relatedField: '',
        options: [
            {
                id: 'A/C',
                value: 'A/C'
            },
            {
                id: 'Non A/C',
                value: 'Non A/C'
            }
        ],
        required: true
    },
    // image: {
    //     type: 'File',
    //     relation: '',
    //     placeholder: 'Upload Image',
    //     label: 'Image',
    //     value: '',
    //     relatedField: '',
    //     options: [],
    //     required: true
    // }
}

Room.customList = {
    id: {
        as: 'ID'
    },
    number: {
        as: 'Number'
    },
    accommodation: {
        as: 'Accommodation'
    },
    type:{
        as: 'Type'
    }
}
module.exports = Room;