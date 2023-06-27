const express = require("express");

const router = express.Router();
const registerController = require("../controllers/registerController");
const { hashPassword } = require("../middlewares/hashedPassword");
const { validateRegister } = require("../validators/registerValidator");

router.post("/", hashPassword, validateRegister, registerController.postUsers);
router.get("/", registerController.getUsers);

module.exports = router;
