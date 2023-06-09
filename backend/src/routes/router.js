const express = require("express");

const router = express.Router();

const itemRouter = require("./itemRouter");
const iconRouter = require("./iconRouter");

router.use("/items", itemRouter);
router.use("/icons", iconRouter);

module.exports = router;
