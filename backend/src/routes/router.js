const express = require("express");

const router = express.Router();

const itemRouter = require("./itemRouter");
const iconRouter = require("./iconRouter");
const tutorialRouter = require("./tutorialRouter");

router.use("/items", itemRouter);
router.use("/icons", iconRouter);
router.use("/tutorials", tutorialRouter);

module.exports = router;
