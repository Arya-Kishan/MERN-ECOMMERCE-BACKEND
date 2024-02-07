const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: { type: Schema.Types.Mixed, default: "user" },
    role: { type: String, default: 'user' },
    addresses: [Schema.Types.Mixed],
    resetPasswordToken: { type: String, default: '' },
    jwtToken: { type: String, default: '' },
})

exports.User = mongoose.model("User", userSchema)