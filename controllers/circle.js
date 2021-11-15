const areaServices = require('../services/area')
const perimeterServices = require('../services/perimeter')
const validationsService = require('../services/validations')


const calculateAreaCircle = async (req, res) => {
    try {
        const { radio } = req.query

        const parsedRadio = parseInt(radio)

        const isCircle = validationsService.isValidRadio(parsedRadio)

        if(!isCircle){
            throw new Error('El radio no es válido')
        }
        
        const areaCircle = await areaServices.calculateCircleArea(parsedRadio)

        res.json({
            area: areaCircle
        })
    }
    catch(err){
        res.send('Error calculando el area del círculo')
    }
}

const calculatePerimeterCircle = async (req, res) => {
    try {
        const { radio } = req.query

        const parsedRadio = parseInt(radio)
        
        const isCircle = validationsService.isValidRadio(parsedRadio)

        if(!isCircle){
            throw new Error('El radio no es válido')
        }

        const perimeterCircle = await perimeterServices.calculateCirclePerimeter(parsedRadio)

        res.json({
           perimeter: perimeterCircle
        })
    }
    catch(err){
        res.send('Error calculando el perimetro del círculo')
    }
}

module.exports = {
    calculateAreaCircle,
    calculatePerimeterCircle
}