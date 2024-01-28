const express = require('express');
const { getCategories, createCategory } = require('../controllers/CategoryController');

const router = express.Router();

router.get("/", getCategories)
    .post("/", createCategory)

module.exports = router;