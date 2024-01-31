const express = require('express');
const { getWishlistByUserId, createWishlist, deleteWishlistById } = require('../controllers/WishlistController');

const router = express.Router();

router.get("/:id", getWishlistByUserId)
    .post("/", createWishlist)
    .delete("/:id", deleteWishlistById)

module.exports = router;