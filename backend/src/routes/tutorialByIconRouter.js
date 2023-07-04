const express = require("express");

const router = express.Router();
const tutorialByIconControllers = require("../controllers/tutorialByIconControllers");

router.get(
  "/:id",
  tutorialByIconControllers.getTutorialsByIdWithJoinTableFormations
);

router.get("/:id", tutorialByIconControllers.getTutorialByHerIdClick);

module.exports = router;
