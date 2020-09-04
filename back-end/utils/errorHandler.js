
module.exports = errorHandler

async function errorHandler(err, req, res, next) {
    if (typeof err === 'string') {
        return res.status(400).json({message: err})
    } 
    if (err.name === 'ValdiationError') {
        return res.status(400).json({message: err})
    }
    if (err.name === 'Unauthorized Error') {
        return res.status(401).json({message: err})
    }
    return res.status(500).json({message: err})
}