const express = require("express");
const router = express.Router();

const roomController = require("../controllers/room.controller");

router.post("/room", roomController.createRoom);

module.exports = router;