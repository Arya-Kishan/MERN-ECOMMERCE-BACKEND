const { Wishlist } = require("../models/Wishlist");

exports.createWishlist = async (req, res) => {
    const wishlist = new Wishlist(req.body);
    try {
        const newWishlist = await wishlist.save();
        res.status(200).json({ data: newWishlist });
    } catch (error) {
        console.log("ERROR IN MAKING NEW wishlist");
        console.log(error);
        res.status(400).json({ data: null });
    }
}

exports.getWishlistByUserId = async (req, res) => {

    console.log("-----------------wishlist-------------");

    try {
        const { id } = req.params;
        const doc = await Wishlist.find({ userId: id }).populate('itemId');
        res.status(200).json(doc);
    } catch (error) {
        console.log("ERROR IN GETTING NEW wishlist");
        console.log(error);
        res.status(400).json({ 'message': 'Error in getting wishlist' });
    }
}

exports.deleteWishlistById = async (req, res) => {

    try {
        const { id } = req.params;
        const doc = await Wishlist.findByIdAndDelete(id);
        res.status(200).json({ data: doc, message: "Success" });
    } catch (error) {
        console.log("ERROR IN DELETING USER");
        console.log(error);
        res.status(400).json({ data: null, message: "Fail" });
    }
}