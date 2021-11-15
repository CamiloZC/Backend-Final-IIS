const { request, response } = require('express');
const express = require('express');
const cors = require('cors')

const app = express()

const areaRouter = require('./router/area')
const perimeterRouter = require('./router/perimeter')
const fibonacciRouter = require('./router/fibonacci')
const factorialRouter = require('./router/factorial')

app.use(cors({
    origin: '*'
    })
)

app.use('/area', areaRouter)
app.use('/perimeter', perimeterRouter)
app.use('/fibonacci', fibonacciRouter)
app.use('/factorial', factorialRouter)

const PORT = 3001
app.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`)
})

