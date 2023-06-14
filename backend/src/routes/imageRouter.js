const express = require("express");

const router = express.Router();
const upload = require("../middlewares/multer-config");
const { uploadFile, getAllFile } = require("../controllers/imageControllers");

router.post("/", upload, uploadFile);
router.get("/", upload, getAllFile);

module.exports = router;
