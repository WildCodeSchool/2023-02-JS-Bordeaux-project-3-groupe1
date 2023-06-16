const express = require("express");

const router = express.Router();
const formartionControllers = require("../controllers/formartionControllers");

router.get("/", formartionControllers.getAll);

module.exports = router;
