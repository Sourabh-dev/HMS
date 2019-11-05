const express = require('express')
const router = express.Router();
const db = require('../config/database')

const Controller = require('../Controllers/AuthController')
router.post('/login', Controller.login);
router.get('/dashboard', Controller.dashboard)

module.exports = router