const express = require('express');
const { getUserById, createUser, updateUserById, deleteUserById, loginUser, resetUserPassword, resetPasswordRequest } = require('../controllers/UserController');
const passport = require('passport');

const router = express.Router();

router.get("/ab/:id", getUserById)
    .post("/signup", createUser)
    .post("/resetPasswordRequest", resetPasswordRequest)
    .post("/resetPassword", resetUserPassword)
    .post("/login", loginUser)
    .patch("/:id", updateUserById)
    .delete("/:id", deleteUserById)

module.exports = router;