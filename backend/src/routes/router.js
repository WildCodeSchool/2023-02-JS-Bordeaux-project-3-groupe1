const express = require("express");

const router = express.Router();

const imageRouter = require("./imageRouter");
const tutorialRouter = require("./tutorialRouter");
const formationRouter = require("./formationRouter");

router.use("/uploads", imageRouter);
router.use("/create", tutorialRouter);
router.use("/formations", formationRouter);

module.exports = router;
