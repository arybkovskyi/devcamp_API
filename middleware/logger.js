//@desc  logs request to console , just an example, not used. Morgan is used instead.

const logger = (req, res, next) => {
    console.log(
        `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
    );
    next();
};

module.exports = logger;