const factorialServices = require('../services/factorial')

const calculateFactorial = async (req, res) => {
    try {
        const numberN = parseInt(req.query.number)

        const factorial = await factorialServices.calculateFactorial(numberN)

        res.json({
            factorial
        })
    }
    catch(err){
        res.send('Error calculando el factorial')
    }
}



module.exports = {
    calculateFactorial,
}