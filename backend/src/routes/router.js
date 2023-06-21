const express = require("express");

const router = express.Router();

const tutorialByIconRouter = require("./tutorialByIconRouter");
const tutorialRouter = require("./tutorialRouter");
const formationRouter = require("./formationRouter");
const tutorialTagRouter = require("./tutorialTagRouter");
const tutorialSelectFormation = require("./tutorialSelectByFormationRouter");

router.use("/tutorialbyicon", tutorialByIconRouter);
router.use("/tutorials", tutorialRouter);
router.use("/formations", formationRouter);
router.use("/tutorialsTags", tutorialTagRouter);
router.use("/tutorials", tutorialSelectFormation);

module.exports = router;
