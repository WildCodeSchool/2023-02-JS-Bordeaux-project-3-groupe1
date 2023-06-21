const express = require("express");

const router = express.Router();

const imageRouter = require("./imageRouter");
const iconRouter = require("./iconRouter");
const tutorialByIconRouter = require("./tutorialByIconRouter");

router.use("/uploads", imageRouter);
router.use("/icons", iconRouter);
router.use("/tutorialbyicon", tutorialByIconRouter);

module.exports = router;
