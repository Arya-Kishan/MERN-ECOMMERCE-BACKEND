const express = require('express');
const { getUserById, createUser, updateUserById, deleteUserById, loginUser, resetUserPassword, resetPasswordRequest, getAllUser } = require('../controllers/UserController');

const router = express.Router();

router.get("/", getAllUser)
    .get("/ab/:id", getUserById)
    .post("/signup", createUser)
    .post("/resetPasswordRequest", resetPasswordRequest)
    .post("/resetPassword", resetUserPassword)
    .post("/login", loginUser)
    .patch("/:id", updateUserById)
    .delete("/:id", deleteUserById)

module.exports = router;