const express = require('express');
const passport = require('passport');
const { checkUser, signoutUser } = require('../controllers/AuthController');

const router = express.Router();

router.get("/checkUserLoggedIn", checkUser)
    .get("/checkUserLoggedOut", signoutUser)

module.exports = router;