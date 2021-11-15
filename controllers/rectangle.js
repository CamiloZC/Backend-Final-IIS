const areaServices = require('../services/area')
const perimeterServices = require('../services/perimeter')
const validationsService = require('../services/validations')

const calculateAreaRectangle = async (req, res) => {
    try {
        const isRectangle = validationsService.isRectangle(req.query)

        if(!isRectangle){
            throw new Error('Los tamaños de los lados del rectángulo no son válidos')
        }
        
        const areaRectangle = await areaServices.calculateRectangleArea(req.query)

        res.json({
           area: areaRectangle
        })
    }
    catch(err){
        res.send('Error calculando el area del rectángulo')
    }
}

const calculatePerimeterRectangle = async (req, res) => {
    try {
        const isRectangle = validationsService.isRectangle(req.query)

        const perimeterRectangle = await perimeterServices.calculateRectanglePerimeter(req.query)

        res.json({
           perimeter: perimeterRectangle
        })
    }
    catch(err){
        res.send('Error calculando el perimetro del rectángulo')
    }
}

module.exports = {
    calculateAreaRectangle,
    calculatePerimeterRectangle
}