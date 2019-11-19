const express = require('express')
const router = express.Router();
const db = require('../config/database')

const Controller = require('../Controllers/Controller')
router.get('/', Controller.dashboard)
router.get('/list/:model', Controller.getList);
router.get('/listing/:model', Controller.getListing);
router.get('/add/:model/', Controller.create);
router.post('/save/:model/', Controller.save);
module.exports = router