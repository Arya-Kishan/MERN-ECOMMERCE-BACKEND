const mongoose = require('mongoose')
const { Schema } = mongoose;

const orderSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    itemId: { type: [Schema.Types.ObjectId], ref: 'Product' },
    selectedAddresses: { type: [Schema.Types.Mixed] },
    paymentMethod: { type: String, default: 'cash' },
    status: { type: String, default: 'pending' },
    date: { type: Date, default: Date.now },
    totalAmount: { type: Number, default: 0 },
    totalQuantity: { type: [Schema.Types.Mixed] },
})

exports.Order = mongoose.model("Order", orderSchema)