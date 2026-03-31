const { AnimalCategory, StageDefinition} = require("../models");
const AnimalBatch = require("../models/animalBatch.model");
const Room = require("../models/room.model");

// Create Category
exports.createCategory = async (req, res) => {
  try {
    const data = await AnimalCategory.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Create Stage
exports.createStage = async (req, res) => {
  try {
    const data = await StageDefinition.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Create Batch
// CREATE BATCH WITH ROOM VALIDATION
exports.createBatch = async (req, res) => {
  try {
    const {
      batch_code,
      quantity,
      initial_weight,
      cost_per_animal,
      category_id,
      stage_id,
      room_id
    } = req.body;

    // ✅ 1. Check Room exists
    const room = await Room.findByPk(room_id);

    if (!room) {
      return res.status(404).json({
        message: "Room not found"
      });
    }

    // ✅ 2. Capacity validation
    if (room.current_occupancy + quantity > room.capacity) {
      return res.status(400).json({
        message: "Room capacity exceeded"
      });
    }

    // ✅ 3. Create Batch
    const batch = await AnimalBatch.create({
      batch_code,
      quantity,
      initial_weight,
      cost_per_animal,
      category_id,
      stage_id,
      room_id
    });

    // ✅ 4. Update Room occupancy
    room.current_occupancy += quantity;
    await room.save();

    res.status(201).json({
      message: "Batch created successfully",
      data: batch
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error"
    });
  }
};
exports.getBatches = async (req, res) => {
  try {
    const AnimalBatch = require("../models/animalBatch.model");
    const AnimalCategory = require("../models/animalCategory.model");
    const StageDefinition = require("../models/stageDefinition.model");
    const Room = require("../models/room.model");

    const batches = await AnimalBatch.findAll({
      include: [
        {
          model: AnimalCategory,
        },
        {
          model: StageDefinition,
        },
        {
          model: Room,
        }
      ]
    });

    res.status(200).json({
      message: "Batches fetched successfully",
      data: batches
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error"
    });
  }
};