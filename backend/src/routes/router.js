const express = require("express");

const router = express.Router();

const imageRouter = require("./imageRouter");

router.use("/uploads", imageRouter);

module.exports = router;
