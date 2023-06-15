const express = require("express");

const router = express.Router();

const imageRouter = require("./imageRouter");
const tutorialRouter = require("./tutorialRouter");

router.use("/uploads", imageRouter);
router.use("/create", tutorialRouter);

module.exports = router;
