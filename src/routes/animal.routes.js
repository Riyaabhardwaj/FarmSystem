const express = require("express");
const router = express.Router();
const controller = require("../controllers/animal.controller");

router.post("/category", controller.createCategory);
router.post("/stage", controller.createStage);
router.post("/batch", controller.createBatch);

module.exports = router;