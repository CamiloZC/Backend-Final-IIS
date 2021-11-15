const areaServices = require('../services/area')
const perimeterServices = require('../services/perimeter')
const validationsService = require('../services/validations')

const calculateAreaTriangle = async (req, res) => {
    try {
        const isTriangle = validationsService.isTriangle(req.query)

        if(!isTriangle){
            throw new Error('Los tamaños de los lados del triángulo no son válidos')
        }
               
        const areaTriangle = await areaServices.calculateTriangleArea(req.query)

        res.json({
            area: areaTriangle
        })
    }
    catch(err){
        res.send('Error calculando el area del triángulo')
    }
}

const calculatePerimeterTriangle = async (req, res) => {
    try {
        const isTriangle = validationsService.isTriangle(req.query)

        if(!isTriangle){
            throw new Error('Los tamaños de los lados del triángulo no son válidos')
        }

        const perimeterTriangle = await perimeterServices.calculateTrianglePerimeter(req.query)

        res.json({
           perimeter: perimeterTriangle
        })
    }
    catch(err){
        res.send('Error calculando el perimetro del triángulo')
    }
}

module.exports = {
    calculateAreaTriangle,
    calculatePerimeterTriangle
}
