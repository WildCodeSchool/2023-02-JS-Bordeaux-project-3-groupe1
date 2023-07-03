const express = require("express");

const router = express.Router();
const tutorialByIconRouter = require("./tutorialByIconRouter");
const tutorialRouter = require("./tutorialRouter");
const formationRouter = require("./formationRouter");
const registerRouter = require("./registerRouter");
const loginRouter = require("./loginRouter");

router.use("/tutorialbyicon", tutorialByIconRouter);
router.use("/tutorials", tutorialRouter);
router.use("/formations", formationRouter);
router.use("/register", registerRouter);
router.use("/login", loginRouter);
module.exports = router;
