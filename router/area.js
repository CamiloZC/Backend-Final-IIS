const express = require('express')

const triangleController = require('../controllers/triangle')
const circleController = require('../controllers/circle')
const rectangleController = require('../controllers/rectangle')

const triangleMiddlewares = require('../middlewares/triangle')

const router = express.Router()

router.get('/triangle', triangleMiddlewares.parseTriangleSides, triangleController.calculateAreaTriangle)
router.get('/circle', circleController.calculateAreaCircle)
router.get('/rectangle', rectangleController.calculateAreaRectangle)

module.exports = router
