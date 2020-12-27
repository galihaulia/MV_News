const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const verifyToken = (req, res, next) => {
    // const token = req.header('auth-token');
    // if(!token) return res.status(401).send('Access Denied');
    
    const authHeader = req.get('Authorization')
    let token;
    if (authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1]
    }
    if (!token) {
        return res.status(401).json({
            message: "Not Authenticated"
        })
    }
    
    try{
        const verified = jwt.verify(token, JWT_SECRET);
        req.verify = verified;
        next();
    }catch(err){
        res.status(400).send('Invalid Token');
    }
};

module.exports = verifyToken;