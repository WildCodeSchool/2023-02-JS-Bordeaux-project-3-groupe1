const express = require("express");

const router = express.Router();
const tutorialRouter = require("./tutorialRouter");
const formationRouter = require("./formationRouter");
const tutorialTagRouter = require("./tutorialTagRouter");
const registerRouter = require("./registerRouter");

router.use("/tutorials", tutorialRouter);
router.use("/formations", formationRouter);
router.use("/tutorialsTags", tutorialTagRouter);
router.use("/register", registerRouter);
module.exports = router;
