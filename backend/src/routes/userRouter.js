const express = require("express");

const router = express.Router();
const userControllers = require("../controllers/userControllers");
const upload = require("../middlewares/multer-config");
const uploadFirebase = require("../middlewares/uploadFirebase");
const { userValidator } = require("../validators/userValidator");

router.get("/:id", userControllers.getOne);
router.put(
  "/:id",
  upload,
  uploadFirebase,
  userValidator,
  userControllers.update
);
router.post("/", upload, uploadFirebase, userValidator, userControllers.create);

module.exports = router;
