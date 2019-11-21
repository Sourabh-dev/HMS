const express = require('express')
const router = express.Router();
const db = require('../config/database')

const ControllerClass = require('../Controllers/Controller')
const UserControllerClass = require('../Controllers/UserController')
const UserController = new UserControllerClass();
const Controller = new ControllerClass('');
router.get('/', Controller.dashboard)
router.get('/list/user', UserController.getList);
router.get('/listing/user', UserController.getListing);
router.get('/add/user/', UserController.create);
router.post('/save/user/', UserController.save);
module.exports = router