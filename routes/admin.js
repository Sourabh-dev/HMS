const express = require('express')
const router = express.Router();
const db = require('../config/database')

const Controller = require('../Controllers/Controller')
router.get('/', Controller.dashboard)
router.get('/list/:model', Controller.getList);
router.get('/listing/:model', Controller.getListing);
module.exports = router