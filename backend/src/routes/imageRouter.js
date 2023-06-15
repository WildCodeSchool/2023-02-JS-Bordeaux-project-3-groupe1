const express = require("express");

const router = express.Router();
const upload = require("../middlewares/multer-config");
const { create, getAll } = require("../controllers/imageControllers");

router.post("/", upload, create);
router.get("/", upload, getAll);

module.exports = router;
