const express = require("express");

const router = express.Router();
const tutorialByIconRouter = require("./tutorialByIconRouter");
const tutorialRouter = require("./tutorialRouter");
const formationRouter = require("./formationRouter");
const registerRouter = require("./registerRouter");
const stepRouter = require("./stepRouter");
const userRouter = require("./userRouter");

router.use("/tutorialbyicon", tutorialByIconRouter);
router.use("/tutorials", tutorialRouter);
router.use("/formations", formationRouter);
router.use("/register", registerRouter);
router.use("/steps", stepRouter);
router.use("/users", userRouter);

module.exports = router;
