const mongoose = require('mongoose')
const { Schema } = mongoose;

const cartSchema = new mongoose.Schema({
    name: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    itemId: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, default: 1 }
})

exports.Cart = mongoose.model("Cart", cartSchema)