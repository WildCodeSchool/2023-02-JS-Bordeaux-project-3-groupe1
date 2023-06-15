const express = require("express");

const router = express.Router();
const tutorialControllers = require("../controllers/tutorialControllers");
const upload = require("../middlewares/multer-config");

router.get("/", tutorialControllers.getAll);
router.get("/:id", tutorialControllers.getOne);
router.put("/:id", tutorialControllers.update);
router.post("/", upload, tutorialControllers.create);
router.delete("/:id", tutorialControllers.destroy);

module.exports = router;
