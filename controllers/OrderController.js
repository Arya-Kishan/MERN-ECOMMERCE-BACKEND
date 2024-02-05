const { Order } = require("../models/Order");
const { Product } = require("../models/Product");
const { User } = require("../models/User");
const { receiptHtml, sendMail } = require("../service/NodeMailer");

exports.createOrder = async (req, res) => {

    const order = new Order(req.body);

    try {
        const newOrder = await order.save();
        res.status(200).json(newOrder);
    } catch (error) {
        console.log("ERROR IN MAKING NEW ORDER");
        console.log(error);
        res.status(400).json({ 'message': 'error in making new order' });
    }
}

exports.getOrderByUserId = async (req, res) => {

    try {
        const { id } = req.params;
        const doc = await Order.find({ userId: id }).populate('itemId');
        res.status(200).json(doc);
    } catch (error) {
        console.log("ERROR IN GETTING NEW USER");
        console.log(error);
        res.status(400).json({ 'message': 'Error in getting cart' });
    }
}

exports.getAllOrders = async (req, res) => {

    let query = Order.find({}).populate('itemId');

    try {

        if (req.query.sort) {
            query = query.find().sort({ date: +req.query.sort })
        }

        const doc = await query.exec();
        res.status(200).json(doc);
    } catch (error) {
        console.log("ERROR IN GETTING NEW USER");
        console.log(error);
        res.status(400).json({ 'message': 'Error in getting cart' });
    }
}

exports.updateOrderStatusById = async (req, res) => {

    const { id } = req.params;

    if (req.body.status == 'delivered') {
        console.log(req.body.itemsId);
        for (let item of req.body.itemsId) {
            const product = await Product.findById(item.itemId)
            product.stock = product.stock - item.quantity
            await product.save()
            console.log(product);
        }
    }

    try {
        const doc = await Order.findByIdAndUpdate(id, { status: req.body.status }, { new: true }).populate('userId').populate('itemId');
        res.status(200).json(doc);
    } catch (error) {
        console.log("ERROR IN UPDATING USER");
        console.log(error);
        res.status(400).json({ 'message': 'Error in updating cart' });
    }
}

exports.deleteOrderById = async (req, res) => {

    try {
        const { id } = req.params;
        const doc = await Order.findByIdAndDelete(id);
        res.status(200).json({ data: doc, message: "Success" });
    } catch (error) {
        console.log("ERROR IN DELETING ORDER");
        console.log(error);
        res.status(400).json({ data: null, message: "Fail" });
    }
}


exports.mailOrderReceipt = async (req, res) => {
    console.log("------------MAIL ORDER RECEIPT-------------");

    try {
        const user = await User.findById(req.body.userId)

        if (user) {

            const email = user.email;
            const subject = 'YOUR ORDER RECIPT'
            const html = await receiptHtml(req.body);

            const response = await sendMail(email, subject, html);
            res.status(200).json({ message: "SUCCESS" })

        } else {
            res.status(400).json({ message: "ERROR IN SENDING ORDER RECEIPT" })
        }


    } catch (error) {
        console.log("ERROR IN SENDING ORDER RECEIPT");
        console.log(error);
        res.status(400).json({ message: "ERROR OCCUR IN MAIL RECEIPT USER DOSENT EXIST" })
    }
}
