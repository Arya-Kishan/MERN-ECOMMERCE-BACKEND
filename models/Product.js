const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String],
    date: { type: Date, default: Date.now }
})

productSchema.index({ category: 'text', description: "text" });

exports.Product = mongoose.model("Product", productSchema)