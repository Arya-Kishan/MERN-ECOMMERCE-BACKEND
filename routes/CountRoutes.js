const express = require('express');
const { getTotalCount } = require('../controllers/AdminController/CountController');
const router = express.Router();

router.get("/", getTotalCount)

module.exports = router;