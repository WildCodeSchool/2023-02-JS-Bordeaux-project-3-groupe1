const express = require("express");

const router = express.Router();

const tutorialRouter = require("./tutorialRouter");
const formationRouter = require("./formationRouter");

router.use("/tutorials", tutorialRouter);
router.use("/formations", formationRouter);

module.exports = router;
