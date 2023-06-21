const express = require("express");

const router = express.Router();
const formationControllers = require("../controllers/formationControllers");

router.get("/", formationControllers.getAll);

module.exports = router;
