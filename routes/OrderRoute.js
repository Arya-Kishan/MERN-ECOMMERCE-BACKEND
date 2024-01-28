const express = require('express');
const { getOrderByUserId, createOrder, updateOrderStatusById, getAllOrders, mailOrderReceipt } = require('../controllers/OrderController');

const router = express.Router();

router.get("/:id", getOrderByUserId)
    .get("/", getAllOrders)
    .post("/", createOrder)
    .post("/mailOrder", mailOrderReceipt)
    .patch("/:id", updateOrderStatusById)

module.exports = router;