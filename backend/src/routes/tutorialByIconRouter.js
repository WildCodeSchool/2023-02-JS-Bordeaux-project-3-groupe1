const express = require("express");

const router = express.Router();
const tutorialByIconControllers = require("../controllers/tutorialByIconControllers");

router.get(
  "/",
  tutorialByIconControllers.getTutorialsByIdWithJoinTableFormations
);

module.exports = router;
