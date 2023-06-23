const express = require("express");

const router = express.Router();
const tutorialControllers = require("../controllers/tutorialControllers");
const upload = require("../middlewares/multer-config");
const uploadFirebase = require("../middlewares/uploadFirebase");
const { getFirebase } = require("../middlewares/getFirebase");
const { getImageById } = require("../middlewares/getFirebase");

const { validateTutorial } = require("../validators/tutorialValidators");

router.get("/", getFirebase, tutorialControllers.getAll);
router.get("/:id", getImageById, tutorialControllers.getOne);
router.get("/WithTags/:id", tutorialControllers.getTutorialTag);
router.put("/:id", tutorialControllers.update);
router.post(
  "/",
  upload,
  uploadFirebase,
  validateTutorial,
  tutorialControllers.create
);
router.delete("/:id", tutorialControllers.destroy);

module.exports = router;
