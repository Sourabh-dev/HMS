const express = require('express')
const router = express.Router();
const db = require('../config/database')

const Controller = require('../Controllers/Controller')
router.get('/:model', Controller.getList);

module.exports = router