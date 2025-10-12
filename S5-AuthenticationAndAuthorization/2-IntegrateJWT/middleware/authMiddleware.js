const jwt = require('jsonwebtoken')

const validateJWT = (req, res, next) => {
    const headers = req.headers || {};
    const token = headers.authorization;

    if (!token) {
        res.status(401).send({message: "Invalid Token"})
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if(!decodedToken) {
        return res.status(401).send({message: "Invalid User"});
    }    

    console.log("Validated JWT. User can access the system ")

    req.user = decodedToken;
    
    next()
}



module.exports = validateJWT;