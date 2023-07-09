const express = require("express");

const router = express.Router();
const tutorialByIconControllers = require("../controllers/tutorialByIconControllers");

router.get(
  "/:userId",
  tutorialByIconControllers.getTutorialsByIdWithJoinTableFormationsNoId
);
router.get(
  "/:formationId/:userId",
  tutorialByIconControllers.getTutorialsByIdWithJoinTableFormations
);

router.get("/:id/:userId", tutorialByIconControllers.getTutorialByHerIdClick);
router.put("/:id/:userId", tutorialByIconControllers.updateStepOnClick);

module.exports = router;
