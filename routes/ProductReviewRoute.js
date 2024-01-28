const express = require('express');
const { createReview, getReviewByProductId } = require('../controllers/ProductReviewControllerjs');


const router = express.Router();

router.get("/:productId", getReviewByProductId)
    .post("/", createReview)


module.exports = router;