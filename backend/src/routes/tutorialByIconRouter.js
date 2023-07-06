const express = require("express");

const router = express.Router();
const tutorialByIconControllers = require("../controllers/tutorialByIconControllers");

router.get(
  "/",
  tutorialByIconControllers.getTutorialsByIdWithJoinTableFormationsNoId
);
router.get(
  "/:id",
  tutorialByIconControllers.getTutorialsByIdWithJoinTableFormations
);

router.get("/:id", tutorialByIconControllers.getTutorialByHerIdClick);
router.put("/:id", tutorialByIconControllers.updateStepOnClick);

module.exports = router;
