const { Category } = require("../models/Category");

exports.createCategory = async (req, res) => {

    const category = new Category(req.body);

    try {
        const newCategory = await category.save();
        res.status(200).json(newCategory);
    } catch (error) {
        console.log("ERROR IN MAKING NEW CATEGORY");
        console.log(error);
        res.status(400).json({ 'message': 'error in making new category' });
    }
}

exports.getCategories = async (req, res) => {

    try {
        const doc = await Category.find();
        res.status(200).json(doc);
    } catch (error) {
        console.log("ERROR IN GETTING CATEGORIES");
        console.log(error);
        res.status(400).json({ 'message': 'Error in getting cATEGORIES' });
    }
}