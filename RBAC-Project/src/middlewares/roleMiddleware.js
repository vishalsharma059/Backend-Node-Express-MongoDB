const authorizeRoles = (...allowedRoles) => { 
    return (req, res, next) => { 
        if(!allowedRoles.includes(req.user.role)) { 
            return res.status(403).json({ message: `Access denied: Role ${req.user.role} is not allowed` }); 
        }
        next();
    }

}

module.exports = authorizeRoles;