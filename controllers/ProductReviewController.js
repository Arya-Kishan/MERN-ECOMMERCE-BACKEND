const { Review } = require("../models/ProductReview");
const { getUrl } = require("../service/Cloudinary");


exports.createReview = async (req, res) => {

    try {
        const url = await getUrl(req.file);
        const body = { reviewUser: req.body.reviewUser, productId: req.body.productId, reviewMessage: req.body.reviewMessage, reviewRating: req.body.reviewRating, reviewImage: url }
        const review = new Review(body);
        const newreview = await review.save();
        res.status(200).json(newreview);
    } catch (error) {
        console.log("ERROR IN MAKING NEW review");
        console.log(error);
        res.status(400).json({ data: null, message: "Fail" });
    }
}

exports.getReviewByProductId = async (req, res) => {

    console.log("----------------- GET PRODUCT REVIEW -------------");
    const { productId } = req.params;

    try {
        const doc = await Review.find({ productId: productId });
        res.status(200).json(doc);
    } catch (error) {
        console.log("ERROR IN GETTING NEW review");
        console.log(error);
        res.status(400).json({ 'message': 'Error in getting review' });
    }
}