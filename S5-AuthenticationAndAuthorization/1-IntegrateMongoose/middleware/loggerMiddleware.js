const logger = (req, res, next) => {
    console.log(`${req.method}: Request recieved on ${req.url}`)
    next();
}

module.exports = logger;