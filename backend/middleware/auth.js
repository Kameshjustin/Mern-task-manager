const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        // Get token from header
        const authHeader = req.header('Authorization');
        
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'No token, authorization denied' });
        }

        const token = authHeader.replace('Bearer ', '');

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Add userId from payload to request object
        req.userId = decoded.userId;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Token is not valid' });
    }
};

// IMPORTANT: No curly braces around auth
module.exports = auth;
