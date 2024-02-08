const { User } = require("../models/User");
const { sendMail } = require("../service/NodeMailer");
const crypto = require("crypto")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.createUser = async (req, res) => {
    try {
        let hashPassword = await bcrypt.hash(req.body.password, 10)
        const user = new User({ ...req.body, password: hashPassword });
        const newUser = await user.save();
        console.log(newUser);
        let token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: "5hr" });

        res.set("X-jwt-routes", token)
        res.status(200).json(newUser);
    } catch (error) {
        console.log("ERROR IN MAKING NERW USER");
        console.log(error);
        res.status(400).json({ 'message': 'error in making new user' });
    }
}

exports.getUserById = async (req, res) => {

    console.log("-------getuserbyid----------");

    try {
        const { _id: id } = req.user;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        console.log("ERROR IN GETTING NEW USER");
        console.log(error);
        res.status(400).json({ 'message': 'Error in getting new user' });
    }
}

// FETCHING ALL USERS FOR ADMIN
exports.getAllUser = async (req, res) => {

    console.log("-------GET ALL USERS----------");

    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        console.log("ERROR IN GETTING ALL USER");
        console.log(error);
        res.status(400).json({ 'message': 'Error in ALL user' });
    }
}

exports.updateUserById = async (req, res) => {

    const { id } = req.params;
    console.log(req.body);

    try {
        const user = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(user);
    } catch (error) {
        console.log("ERROR IN UPDATING USER");
        console.log(error);
        res.status(400).json({ 'message': 'Error in updating user user' });
    }
}

exports.deleteUserById = async (req, res) => {

    const { id } = req.params;

    try {
        const user = await User.findByIdAndDelete(id);
        res.status(200).json(user);
    } catch (error) {
        console.log("ERROR IN DELETING USER");
        console.log(error);
        res.status(400).json({ 'message': 'Error in deleting user' });
    }
}

exports.loginUser = async (req, res) => {
    console.log("------------login-------------");
    try {
        const user = await User.findOne({ email: req.body.email })

        let token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "600000s" });

        res.set("X-jwt-routes", token)

        let verifyPassword = await bcrypt.compare(req.body.password, user.password)

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

exports.resetPasswordRequest = async (req, res) => {
    console.log("------------RESET PASSWORD REQUEST-------------");
    console.log(req.body.email);
    try {

        const ReceiverEmail = req.body.email;
        const user = await User.findOne({ email: req.body.email })

        if (user) {

            const token = crypto.randomBytes(48).toString('hex');
            user.resetPasswordToken = token;
            await user.save();
            console.log("a1");
            const subject = 'RESET YOUR PASSWORD'
            const html = `<p>Click <a href=${'https://heroic-twilight-9e84af.netlify.app/resetPassword?email=' + ReceiverEmail + '&token=' + token}>here</a> to reset your password</p>`
            console.log("a2");

            const response = await sendMail(ReceiverEmail, subject, html);
            console.log("a3");
            res.status(200).json({ data: response, message: "SUCCESS" })

        } else {
            res.status(400).json({ message: "ERROR IN RESET PASSWORD REQUEST" })
        }


    } catch (error) {
        console.log("ERROR IN RESET PASSWORD REQUEST - EMAIL DOES NOT EXIST");
        console.log(error);
        res.status(400).json({ message: "EMAIL DOES NOT EXIST" })
    }
}

exports.resetUserPassword = async (req, res) => {
    console.log("------------RESET PASSWORD-------------");
    try {
        const user = await User.findOne({ email: req.body.email })

        if (user.token = req.body.token) {
            let hashPassword = await bcrypt.hash(req.body.password, 10)
            user.password = hashPassword;
            await user.save();
            const { email } = req.body;
            const subject = 'YOUR PASSWORD CHANGED'
            const html = `<p>Click <a href=${'https://heroic-twilight-9e84af.netlify.app/login'}>here</a> to login to home</p>`

            const response = await sendMail(email, subject, html);
            res.status(200).json({ data: response, message: "SUCCESS" })

        } else {
            res.status(400).json({ message: "EMAIL DOES NOT EXIST IN PASSWORD RESET" })
        }


    } catch (error) {
        console.log("ERROR IN RESET PASSWORD");
        console.log(error);
        res.status(400).json({ message: "ERROR OCCUR IN RESETTING PASSWORD" })
    }
}
