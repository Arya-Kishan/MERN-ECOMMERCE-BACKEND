const express = require('express');
const { getUserById, createUser, updateUserById, deleteUserById, getUser, loginUser, resetUserPassword, resetPasswordRequest } = require('../controllers/UserController');
const passport = require('passport');

const router = express.Router();

router.get("/ab/:id", getUserById)
    .get("/cd/getUser", getUser)
    .post("/signup", createUser)
    .post("/resetPasswordRequest", resetPasswordRequest)
    .post("/resetPassword", resetUserPassword)
    .post("/login", loginUser)
    .patch("/:id", updateUserById)
    .delete("/:id", deleteUserById)

module.exports = router;