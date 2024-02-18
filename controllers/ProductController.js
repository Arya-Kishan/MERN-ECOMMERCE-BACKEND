const { query } = require("express");
const { Product } = require("../models/Product");
const { getUrl } = require("../service/Cloudinary");

exports.createProduct = async (req, res) => {

    try {
        let urlArr = [];
        for (let file in req.files) {
            let url = await getUrl(req.files[file][0])
            urlArr.push(url);
        }
        console.log(urlArr);
        let body = { ...req.body, thumbnail: urlArr[0], images: [urlArr[1], urlArr[2], urlArr[3]] }
        console.log(body);

        const product = new Product(body);
        const doc = await product.save();
        res.status(200).json(doc);
    } catch (error) {
        console.log("ERROR IN MAKING NERW PRODUCT");
        console.log(error);
        res.status(400).json({ 'message': 'error in making new user' });
    }
}

exports.getAllProducts = async (req, res) => {

    let query = Product.find();

    if (req.query.category) {
        query = query.find({ category: req.query.category });
    }

    if (req.query.brand) {
        query = query.find({ brand: req.query.brand });
    }

    if (req.query.category && req.query.brand) {
        query = query.find({ $and: [{ category: req.query.category }, { brand: req.query.brand }] });
    }

    if (req.query.sort && req.query.order && req.query.sort !== 'undefined') {
        query = query.find().sort({ [req.query.sort]: req.query.order });
    }

    if (req.query.limit) {
        query = query.find().limit(req.query.limit);
    }

    if (req.query.page && req.query.limit) {
        const pageSize = req.query.limit;
        const page = req.query.page;
        query = query.skip(pageSize * (page - 1)).limit(pageSize);
    }




    try {
        const product = await query.exec();
        res.status(200).json(product);
    } catch (error) {
        console.log("ERROR IN GETTING NEW PRODUCT BY ID");
        console.log(error);
        res.status(400).json({ 'message': 'Error in getting PRODUCT' });
    }
}

exports.getProductById = async (req, res) => {

    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        console.log("ERROR IN GETTING NEW PRODUCT BY ID");
        console.log(error);
        res.status(400).json({ 'message': 'Error in getting PRODUCT' });
    }
}

exports.updateProductById = async (req, res) => {

    try {
        const { id } = req.params;
        const doc = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(doc);
    } catch (error) {
        console.log("ERROR IN UPDATING USER");
        console.log(error);
        res.status(400).json({ 'message': 'Error in updating user user' });
    }
}

exports.deleteProductById = async (req, res) => {

    try {
        const { id } = req.params;
        const doc = await Product.findByIdAndDelete(id);
        res.status(200).json(doc);
    } catch (error) {
        console.log("ERROR IN DELETING PRODUCT");
        console.log(error);
        res.status(400).json({ 'message': 'Error in deleting PRODUCT' });
    }
}

exports.getRelatedProducts = async (req, res) => {

    try {
        const { category } = req.params;
        const product = await Product.find({ category: category });
        res.status(200).json(product);
    } catch (error) {
        console.log("ERROR IN GETTING RELATED PRODUCT");
        console.log(error);
        res.status(400).json({ 'message': 'Error in getting RELATED PRODUCT' });
    }
}

exports.getSearchProduct = async (req, res) => {

    try {
        const { text } = req.query;
        const product = await Product.find({ $text : { $search : text }});
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(400).json({ 'message': 'Error in Searching by text' });
    }
}