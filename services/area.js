const perimeterService = require("./perimeter");

const calculateTriangleArea = async (sides) => {
    const {sideA, sideB, sideC} = sides

    const trianglePerimeter = await perimeterService.calculateTrianglePerimeter(sides)
    const semiPerimeter = trianglePerimeter/2

	const triangleArea = Math.sqrt(semiPerimeter*(semiPerimeter-sideA)*(semiPerimeter-sideB)*(semiPerimeter-sideC))

    return triangleArea
}

const calculateCircleArea = async (radio) => {
    return Math.PI*(Math.pow(radio,2));
}

const calculateRectangleArea = async (sides) => {
    const {sideA,sideB} = sides
    
    return sideA*sideB;
}

module.exports = {
    calculateTriangleArea,
    calculateCircleArea,
    calculateRectangleArea
}
