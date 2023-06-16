const express = require("express");

const router = express.Router();
const tutorialControllers = require("../controllers/tutorialControllers");
const upload = require("../middlewares/multer-config");
const uploadFirebase = require("../middlewares/uploadFirebase");

router.get("/", tutorialControllers.getAll);
router.get("/:id", tutorialControllers.getOne);
router.put("/:id", tutorialControllers.update);
router.post("/", upload, uploadFirebase, tutorialControllers.create);
router.delete("/:id", tutorialControllers.destroy);

module.exports = router;
