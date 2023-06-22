const express = require("express");

const router = express.Router();
const tutorialsTagsControllers = require("../controllers/tutorialsTagsControllers");

router.get("/:id", tutorialsTagsControllers.getTutorialTag);

module.exports = router;
