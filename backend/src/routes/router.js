const express = require("express");

const router = express.Router();

const tutorialByIconRouter = require("./tutorialByIconRouter");
const tutorialRouter = require("./tutorialRouter");
const formationRouter = require("./formationRouter");
const tutorialTagRouter = require("./tutorialTagRouter");

router.use("/tutorialbyicon", tutorialByIconRouter);
router.use("/tutorials", tutorialRouter);
router.use("/formations", formationRouter);
router.use("/tutorialWithTags", tutorialTagRouter);
router.use("/tutorialsTags", tutorialTagRouter);

module.exports = router;
