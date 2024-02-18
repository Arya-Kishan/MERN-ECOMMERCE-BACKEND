const express = require('express');
const { getProductById, createProduct, updateProductById, deleteProductById, getAllProducts, getRelatedProducts, getSearchProduct } = require('../controllers/ProductController');
const { multiUploads } = require('../service/Cloudinary');

const router = express.Router();

router.get("/:id", getProductById)
    .get("/", getAllProducts)
    .get("/search/text", getSearchProduct)
    .get("/related/:category", getRelatedProducts)
    .post("/",multiUploads, createProduct)
    .patch("/:id", updateProductById)
    .delete("/:id", deleteProductById)

module.exports = router;