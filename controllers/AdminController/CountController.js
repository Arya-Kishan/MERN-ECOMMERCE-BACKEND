const { Order } = require("../../models/Order");
const { Product } = require("../../models/Product");
const { User } = require("../../models/User");

exports.getTotalCount = async (req, res) => {

    console.log("COUNT TOTAL");

    try {


        let products = await Product.find().count();
        let orders = await Order.find().count();
        let users = await User.find().count();
        return res.status(200).json({ productsCount: products, ordersCount: orders, usersCount: users })




    } catch (error) {
        console.log("ERROR IN GETTING NEW PRODUCT BY ID");
        console.log(error);
        res.status(400).json({ 'message': 'Error in getting PRODUCT' });
    }
}