const Room = require("../models/room.model");

// CREATE ROOM
exports.createRoom = async (req, res) => {
  try {
    const { name, capacity } = req.body;

    // Basic validation
    if (!name || !capacity) {
      return res.status(400).json({
        message: "Name and capacity are required",
      });
    }

    const room = await Room.create({
      name,
      capacity,
    });

    res.status(201).json({
      message: "Room created successfully",
      data: room,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};