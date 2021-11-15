const fibonacciServices = require('../services/fibonacci')
const validationsService = require('../services/validations')

const calculateFibonacci = async (req, res) => {
    try {
        const { number } = req.query

        const parsedNumber = parseInt(number)

        const isValid = validationsService.isValidNumber(parsedNumber)

        if(!isValid){
            throw new Error('El número no es válido')
        }

        const fibonacci = await fibonacciServices.calculateFibonacci(parsedNumber)

        res.json({
            fibonacci
        })
    }
    catch(err){
        res.send('Error calculando la serie')
    }
}


module.exports = {
    calculateFibonacci,
}