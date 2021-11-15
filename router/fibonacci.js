const express = require('express')

const fibonacciController = require('../controllers/fibonacci')

const router = express.Router()

router.get('', fibonacciController.calculateFibonacci)

module.exports = router