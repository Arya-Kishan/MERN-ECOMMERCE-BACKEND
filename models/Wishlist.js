const mongoose = require('mongoose')
const { Schema } = mongoose;

const wishlistSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    itemId: { type: Schema.Types.ObjectId, ref: 'Product' },
})

exports.Wishlist = mongoose.model("Wishlist", wishlistSchema)