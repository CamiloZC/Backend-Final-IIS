const express = require('express')

const factorialController = require('../controllers/factorial')

const router = express.Router()

router.get('', factorialController.calculateFactorial)

module.exports = router