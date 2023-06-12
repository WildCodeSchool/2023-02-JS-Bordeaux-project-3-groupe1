const express = require("express");

const router = express.Router();
const tutorialControllers = require("../controllers/tutorialControllers");

// router.get("/", tutorialControllers.browse);
router.get("/", tutorialControllers.readAll);
router.get("/:id", tutorialControllers.read);
router.put("/:id", tutorialControllers.edit);
router.post("/", tutorialControllers.add);
router.delete("/:id", tutorialControllers.destroy);

module.exports = router;
