const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode; // Attach the decoded user info to the request object
            console.log("The decoded user is: ", req.user);
            next(); // Call next middleware
        } catch (error) {
            return res.status(400).json({ message: "Token is not valid" });
        }
    } else {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
};

module.exports = verifyToken;