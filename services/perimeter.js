const calculateTrianglePerimeter = async (sides) => {
    const {sideA, sideB, sideC} = sides
    
    return sideA+sideB+sideC;
}

const calculateCirclePerimeter = async (radio) => {
    return 2*(Math.PI)*radio;
}

const calculateRectanglePerimeter = async (sides) => {
    const {sideA, sideB} = sides

    return (2*sideA)+(2*sideB);
}

module.exports = {
    calculateTrianglePerimeter,
    calculateCirclePerimeter,
    calculateRectanglePerimeter
}