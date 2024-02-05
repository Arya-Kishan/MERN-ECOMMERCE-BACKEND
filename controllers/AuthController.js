const { User } = require("../models/User");
const jwt = require("jsonwebtoken")



exports.checkUser = async (req, res) => {

    console.log("------- CHECKING USER WITH TOKEN ----------");
    try {
        let verfiedUser = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
        const user = await User.findById(verfiedUser.userId);
        res.status(200).json({ _id: user._id, name: user.name, email: user.email, role: user.role, addresses: user.addresses });
    } catch (error) {
        console.log(error);
        console.log("ERROR IN GETTING VERIFIED BY TOKEN");
        res.status(400).json({ 'message': 'ERROR IN GETTING VERIFIED BY TOKEN' });
    }
}

exports.signoutUser = async (req, res) => {

    console.log("------- CHECKING USER WITH TOKEN ----------");
    try {
        res.status(200).cookie("jwt", "null").json({ data: null })
    } catch (error) {
        console.log(error);
        console.log("ERROR IN SIGN OUT");
        res.status(400).cookie("jwt", "null").json({ 'message': 'ERROR IN REMOVING TOKEN' });
    }
}