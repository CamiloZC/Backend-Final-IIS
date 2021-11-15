const parseTriangleSides = (req, res, next) => {
    const parsedToIntSides = {}

    Object.keys(req.query).forEach(key => {
        parsedToIntSides[key] = parseInt(req.query[key] || 0)
    })

    req.query = parsedToIntSides

    next()
}

module.exports = {
    parseTriangleSides
}
