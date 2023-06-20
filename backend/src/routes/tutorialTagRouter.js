const express = require("express");

const router = express.Router();
const tutorialsTagsControllers = require("../controllers/tutorialsTagsControllers");

router.get("/", tutorialsTagsControllers.getAll);

module.exports = router;
