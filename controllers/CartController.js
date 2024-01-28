const { Cart } = require("../models/Cart")

exports.createCart = async (req, res) => {
    const cart = new Cart(req.body);
    try {
        const newCart = await cart.save();
        res.status(200).json({ data: newCart, message: "Success" });
    } catch (error) {
        console.log("ERROR IN MAKING NEW CART");
        console.log(error);
        res.status(400).json({ data: null, message: "Fail" });
    }
}

exports.getCartByUserId = async (req, res) => {

    console.log("-----------------cart-------------");

    try {
        const { id } = req.params;
        const doc = await Cart.find({ userId: id }).populate('itemId');
        res.status(200).json(doc);
    } catch (error) {
        console.log("ERROR IN GETTING NEW CART");
        console.log(error);
        res.status(400).json({ 'message': 'Error in getting cart' });
    }
}

exports.updateCartById = async (req, res) => {

    try {
        const { id } = req.params;
        const doc = await Cart.findByIdAndUpdate(id, req.body, { new: true }).populate('itemId');
        res.status(200).json(doc);
    } catch (error) {
        console.log("ERROR IN UPDATING USER");
        console.log(error);
        res.status(400).json({ 'message': 'Error in updating cart' });
    }
}

exports.deleteCartById = async (req, res) => {

    try {
        const { id } = req.params;
        const doc = await Cart.findByIdAndDelete(id);
        res.status(200).json({ data: doc, message: "Success" });
    } catch (error) {
        console.log("ERROR IN DELETING USER");
        console.log(error);
        res.status(400).json({ data: null, message: "Fail" });
    }
}

exports.deleteAllCartUser = async (req, res) => {

    try {
        const { id } = req.params;
        const doc = await Cart.deleteMany({ userId: id });
        res.status(200).json(doc);
    } catch (error) {
        console.log("ERROR IN DELETING USER");
        console.log(error);
        res.status(400).json({ 'message': 'Error in deleting cart' });
    }
}