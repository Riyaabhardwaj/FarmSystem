const { AnimalCategory, StageDefinition, AnimalBatch } = require("../models");

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
exports.createBatch = async (req, res) => {
  try {
    const data = await AnimalBatch.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};