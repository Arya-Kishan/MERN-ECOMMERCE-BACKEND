const jwt = require('jsonwebtoken');
const { User } = require('../models/User');
const SECRET_KEY = 'SECRET_KEY'

exports.sanitiseUser = (user) => {
    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role,
        addresses: user.addresses
    }
}

exports.cookieExtractor = (req) => {
    console.log("---------INSIDE COOKIE EXTRACTOR----------");
    var token = null;
    if (req && req.cookies) {
        token = req.cookies['jwt'];
    }
    return token;
};

exports.jwtVerify = async (req, res, next) => {
    console.log("------------jwt verify-----------");
    console.log(req?.cookies);
    try {
        const jwtData = jwt.verify(req?.cookies.jwt, SECRET_KEY)
        const user = await User.findById(jwtData.id)
        if (user) {
            next()
        } else {
            res.status(401).json({ message: "ERROR IN JWT AUTHENTICATION" })
        }
    } catch (error) {
        res.status(401).json({ message: "ERROR IN JWT VERIFICATION" })
    }
}