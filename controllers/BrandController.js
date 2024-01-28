const { Brand } = require("../models/Brand");

exports.createBrand = async (req, res) => {

    const brand = new Brand(req.body);

    try {
        const newBrand = await brand.save();
        res.status(200).json(newBrand);
    } catch (error) {
        console.log("ERROR IN MAKING NEW CATEGORY");
        console.log(error);
        res.status(400).json({ 'message': 'error in making new category' });
    }
}

exports.getBrands = async (req, res) => {

    try {
        const doc = await Brand.find();
        res.status(200).json(doc);
    } catch (error) {
        console.log("ERROR IN GETTING BRANDS");
        console.log(error);
        res.status(400).json({ 'message': 'Error in getting BRANDS' });
    }
}