const express = require("express");

const router = express.Router();
const loginController = require("../controllers/loginController");
const { verifyPassword } = require("../middlewares/verifyPassword");

router.post("/", verifyPassword, loginController.verifyUsers);

module.exports = router;
