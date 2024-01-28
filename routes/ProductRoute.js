const express = require('express');
const { getProductById, createProduct, updateProductById, deleteProductById, getAllProducts, getRelatedProducts } = require('../controllers/ProductController');

const router = express.Router();

router.get("/:id", getProductById)
    .get("/", getAllProducts)
    .get("/related/:category", getRelatedProducts)
    .post("/", createProduct)
    .patch("/:id", updateProductById)
    .delete("/:id", deleteProductById)

module.exports = router;