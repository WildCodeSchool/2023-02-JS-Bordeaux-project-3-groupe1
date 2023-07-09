const express = require("express");

const router = express.Router();
const loginController = require("../controllers/loginController");
const { verifyPassword } = require("../middlewares/verifyPassword");
const { verifyToken } = require("../middlewares/verifyToken");

router.post("/", verifyPassword, verifyToken, loginController.verifyUsers);

module.exports = router;
