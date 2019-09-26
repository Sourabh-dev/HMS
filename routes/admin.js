const express = require('express')
const router = express.Router();
const db = require('../config/database')
const Booking = require('../models/Booking')
router.get('/', (req, res) => {
    Booking.findAll()
            .then((accounts) => console.log(accounts))
    res.sendStatus(200)
})
module.exports = router