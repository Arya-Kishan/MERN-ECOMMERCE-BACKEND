const { User } = require("../models/User");
const { sendMail } = require("../service/NodeMailer");
const crypto = require("crypto")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")



exports.loginGuestUser = async (req, res) => {
    console.log("------------login-------------");
    try {
        const user = await User.findOne({ email: "arya12345kishan@gmail.com" })

        console.log(user);

        let token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.set("X-jwt-routes", token)

        let verifyPassword = await bcrypt.compare("arya", user.password)

        if (verifyPassword) {
            res.status(200).json(user)
        } else {
            res.status(400).json({ message: "PASSWORD INCORRECT" })
        }


    } catch (error) {
        console.log("ERROR IN LOGIN");
        res.status(400).json({ message: "EMAIL DOES NOT EXIST" })
    }
}