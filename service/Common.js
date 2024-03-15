const jwt = require('jsonwebtoken');
const { User } = require('../models/User');

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

exports.jwtAuthenticateRoutes = async (req, res, next) => {

    try {

        let token = req?.headers?.["jwt-routes"];

        const jwtData = jwt.verify(token, process.env.JWT_SECRET)

        const user = await User.findById(jwtData.userId)

        if (user) {
            next()
        } else {
            res.status(401).json({ message: "ERROR IN JWT ROUTES AUTHENTICATION USER NOT FOUND" })
        }
    } catch (error) {
        res.status(401).json({ message: "ERROR IN JWT ROUTES VERIFICATION" })
    }
}