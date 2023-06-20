const express = require("express");

const router = express.Router();

const tutorialRouter = require("./tutorialRouter");
const formationRouter = require("./formationRouter");
const tutorialTagRouter = require("./tutorialTagRouter");

router.use("/tutorials", tutorialRouter);
router.use("/formations", formationRouter);
router.use("/tutorialsTags", tutorialTagRouter);

module.exports = router;
