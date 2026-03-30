const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const { v4: uuidv4 } = require("uuid");

const AnimalBatch = sequelize.define("AnimalBatch", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: uuidv4,
  },
  batch_code: DataTypes.STRING,
  quantity: DataTypes.INTEGER,
  initial_weight: DataTypes.FLOAT,
  cost_per_animal: DataTypes.FLOAT,
  status: {
    type: DataTypes.STRING,
    defaultValue: "active",
  },
}, {
  timestamps: true,
});

module.exports = AnimalBatch;