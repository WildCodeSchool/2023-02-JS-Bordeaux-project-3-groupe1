const express = require("express");

const router = express.Router();

const stepControllers = require("../controllers/stepControllers");

router.post("/:id", stepControllers.create);

module.exports = router;
