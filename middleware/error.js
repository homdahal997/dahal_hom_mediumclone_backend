// Error handling middleware
function errorHandler(err, req, res, next) {
    if (err.name === "ValidationError") {
        const messages = Object.values(err.errors).map(val => val.message)
        res.status(400).json({ errors: messages });
    } else if (err.code === 11000) {
        // Handle duplicate key error- all uniques in schema
        res.status(400).json({ error: 'Duplicate field value entered' });
    } else if (err.name === 'CastError') {
        // handle invalid object id 
        const message = `Invalid object id`;
        res.status(404).json({Error: message});
    } else {
        res.status(500).json({ error: 'Server error' });
    }
}

module.exports = errorHandler;
