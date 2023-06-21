const express = require("express");

const router = express.Router();
const tutorialByFormation = require("../controllers/tutorialSelectByFormationControllers");

router.put("/:id", tutorialByFormation.tutorialSelectFormationById);

module.exports = router;
