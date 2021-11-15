const isTriangle = (sides = {}) => {
    const parsedToIntSides = {}
    
    Object.keys(sides).forEach(key => {
        parsedToIntSides[key] = parseInt(sides[key]) || 0
    })

    const {sideA, sideB, sideC} = parsedToIntSides

    if(sideA <= 0 || sideB <= 0 || sideC <= 0){
        return false
    }

    if(sideA >= sideB+sideC || sideB >= sideA+sideC || sideC >= sideB+sideA){
        return false
    }

    return true
}

const isValidRadio = (radio) => {
    return radio > 0
}

const isRectangle = (sides) => {
    const { sideA, sideB} = sides

    return sideA > 0 && sideB > 0
}

module.exports = {
    isTriangle,
    isValidRadio,
    isRectangle
}