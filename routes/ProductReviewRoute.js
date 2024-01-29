const express = require('express');
const { createReview, getReviewByProductId } = require('../controllers/ProductReviewController');
const { SingleUpload } = require('../service/Cloudinary');


const router = express.Router();

router.get("/:productId", getReviewByProductId)
    .post("/",SingleUpload, createReview)


module.exports = router;