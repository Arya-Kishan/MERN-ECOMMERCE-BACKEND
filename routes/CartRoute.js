const express = require('express');
const { getCartByUserId, createCart, updateCartById, deleteCartById, deleteAllCartUser } = require('../controllers/CartController');

const router = express.Router();

router.get("/:id", getCartByUserId)
    .post("/", createCart)
    .patch("/:id", updateCartById)
    .delete("/user/:id", deleteAllCartUser)
    .delete("/:id", deleteCartById)

module.exports = router;