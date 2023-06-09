const express = require("express");

const router = express.Router();
const iconControllers = require("../controllers/iconControllers");

router.get("/", iconControllers.browse);
router.get("/:id", iconControllers.read);
router.put("/:id", iconControllers.edit);
router.post("/", iconControllers.add);
router.delete("/:id", iconControllers.destroy);

module.exports = router;
