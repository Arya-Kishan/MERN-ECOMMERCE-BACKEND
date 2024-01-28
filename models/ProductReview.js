const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
    productId: { type: Schema.Types.ObjectId },
    reviewUser: { type: String, default: "User" },
    reviewDate: { type: Date, default: Date.now },
    reviewRating: { type: Number },
    reviewMessage: { type: String, default: "" },
    reviewImage: { type: String, default: "" },
})

exports.Review = mongoose.model("Review", reviewSchema)
