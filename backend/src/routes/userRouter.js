const express = require("express");

const router = express.Router();
const userControllers = require("../controllers/userControllers");
const upload = require("../middlewares/multer-config");
const uploadFirebase = require("../middlewares/uploadFirebase");
const { userValidator } = require("../validators/userValidator");

router.get(
  "/usersparcours/:userId",
  userControllers.getTutorialByUserJustOneUser
);
router.get("/", userControllers.getAll);
router.get("/:id", userControllers.getOne);
router.put(
  "/:userId",
  upload,
  uploadFirebase,
  userValidator,
  userControllers.update
);

router.put("/level/:userId", userControllers.updateLevel);

router.delete("/:id", userControllers.destroy);

module.exports = router;
