/* eslint-disable class-methods-use-this */
const { ModelAbstract, Column, FieldFactory } = require('@admin-interface/core');

const { User } = require('../../models');

class UserAI extends ModelAbstract {
    getModel() {
        return User;
    }

    getColumnsStrategy() {
        return [
            new Column().setTitle('Id').setField('id'),
            new Column().setTitle('Name').setField('name'),
        ];
    }

    getFieldsStrategy() {
        return [
            new FieldFactory('name', 'String').setTitle('Name'),
        ];
    }

    getReferencesStrategy() {
        return ['Post'];
    }
}

module.exports = UserAI;