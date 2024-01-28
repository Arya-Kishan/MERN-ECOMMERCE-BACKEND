const express = require('express');
const { getBrands, createBrand } = require('../controllers/BrandController');

const router = express.Router();

router.get("/", getBrands)
    .post("/", createBrand)

module.exports = router;