const express = require("express");

const router = express.Router();

const imageRouter = require("./imageRouter");
const iconRouter = require("./iconRouter");
const tutorialByIconRouter = require("./tutorialByIconRouter");
const tutorialRouter = require("./tutorialRouter");
const formationRouter = require("./formationRouter");
const tutorialTagRouter = require("./tutorialTagRouter");

router.use("/uploads", imageRouter);
router.use("/icons", iconRouter);
router.use("/tutorialbyicon", tutorialByIconRouter);
router.use("/tutorials", tutorialRouter);
router.use("/formations", formationRouter);
router.use("/tutorialsTags", tutorialTagRouter);


module.exports = router;
