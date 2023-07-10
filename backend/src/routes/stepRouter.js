const express = require("express");

const router = express.Router();

const stepControllers = require("../controllers/stepControllers");

router.post("/:userId", stepControllers.create);

module.exports = router;
