const express = require('express')
const router = express.Router();
const db = require('../config/database')

const ControllerClass = require('../Controllers/Controller')
const UserControllerClass = require('../Controllers/UserController')
const RoomControllerClass = require('../Controllers/RoomController')
const ServiceControllerClass = require('../Controllers/ServiceController')
const BookingControllerClass = require('../Controllers/BookingController')

const UserController = new UserControllerClass();
const RoomController = new RoomControllerClass();
const ServiceController = new ServiceControllerClass();
const BookingController = new BookingControllerClass();
const Controller = new ControllerClass('');
router.get('/', Controller.dashboard)
router.get('/list/user', UserController.getList);
router.get('/listing/user', UserController.getListing);
router.get('/add/user/', UserController.create);
router.post('/save/user/', UserController.save);
router.get('/edit/user/:id', UserController.edit);
router.get('/delete/user/:id', UserController.delete);
router.post('/update/user/:id', UserController.update);

router.get('/list/room', RoomController.getList);
router.get('/listing/room', RoomController.getListing);
router.get('/add/room/', RoomController.create);
router.post('/save/room/', RoomController.save);
router.get('/edit/room/:id', RoomController.edit);
router.get('/delete/room/:id', RoomController.delete);
router.post('/update/room/:id', RoomController.update);


router.get('/list/service', ServiceController.getList);
router.get('/listing/service', ServiceController.getListing);
router.get('/add/service/', ServiceController.create);
router.post('/save/service/', ServiceController.save);
router.get('/edit/service/:id', ServiceController.edit);
router.get('/delete/service/:id', ServiceController.delete);
router.post('/update/service/:id', ServiceController.update);

router.get('/list/booking', BookingController.getList);
router.get('/listing/booking', BookingController.getListing);
router.get('/:status/booking/:id', BookingController.changeStatus);

module.exports = router