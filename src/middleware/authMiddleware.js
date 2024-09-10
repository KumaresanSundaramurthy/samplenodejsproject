const jwt = require("jsonwebtoken");
const { parse } = require('url');

const excludeRequest = ['/api/users/verify-user'];

const authMiddleware = (request, response, next) => {

    const { pathname } = parse(request.url, true);
    
    if (excludeRequest.includes(pathname)) {
        return next();
    }

    if(!request.header('Authorization')) {
        return response.status(401).json({
            message: "Unauthorized"
        })
    }
    
    const token = request.header('Authorization').replace('Bearer ', '');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        request.user = decoded;
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return response.status(401).json({
                message: "Token expired"
            });
        } else if (error.name === "JsonWebTokenError") {
            return response.status(401).json({
                message: "Invalid token"
            });
        } else {
            return response.status(500).json({
                message: "Internal server error"
            });
        }
    }

}

module.exports = authMiddleware;