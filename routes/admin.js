const express = require('express')
const router = express.Router();
const db = require('../config/database')

const ControllerClass = require('../Controllers/Controller')
const UserControllerClass = require('../Controllers/UserController')
const CityControllerClass = require('../Controllers/CityController')
const ServiceControllerClass = require('../Controllers/ServiceController')

const UserController = new UserControllerClass();
const CityController = new CityControllerClass();
const ServiceController = new ServiceControllerClass();
const Controller = new ControllerClass('');
router.get('/', Controller.dashboard)
router.get('/list/user', UserController.getList);
router.get('/listing/user', UserController.getListing);
router.get('/add/user/', UserController.create);
router.post('/save/user/', UserController.save);
router.get('/edit/user/:id', UserController.edit);

router.get('/list/city', CityController.getList);
router.get('/listing/city', CityController.getListing);
router.get('/add/city/', CityController.create);
router.post('/save/city/', CityController.save);
router.get('/edit/city/:id', CityController.edit);

router.get('/list/service', ServiceController.getList);
router.get('/listing/service', ServiceController.getListing);
router.get('/add/service/', ServiceController.create);
router.post('/save/service/', ServiceController.save);
router.get('/edit/service/:id', ServiceController.edit);
module.exports = router