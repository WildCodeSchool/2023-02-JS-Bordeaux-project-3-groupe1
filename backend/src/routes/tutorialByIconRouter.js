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

router.get("/:id", tutorialByIconControllers.getTutorialByHerIdClick);
router.put("/:id", tutorialByIconControllers.updateStepOnClick);

module.exports = router;
