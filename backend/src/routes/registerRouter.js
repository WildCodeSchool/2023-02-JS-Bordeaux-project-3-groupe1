const express = require("express");

const router = express.Router();
const registerController = require("../controllers/registerController");

router.post("/", registerController.postUsers);
router.get("/", registerController.getUsers);

module.exports = router;
