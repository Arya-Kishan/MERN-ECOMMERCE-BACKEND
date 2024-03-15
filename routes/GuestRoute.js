const express = require('express');
const { loginGuestUser } = require('../controllers/GuestController');

const router = express.Router();

router.get("/", loginGuestUser)

module.exports = router;