const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const { v4: uuidv4 } = require("uuid");

const StageDefinition = sequelize.define("StageDefinition", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: uuidv4,
  },
  stage_name: DataTypes.STRING,
  duration_days: DataTypes.INTEGER,
  expected_weight: DataTypes.FLOAT,
  feed_per_day: DataTypes.FLOAT,
}, {
  timestamps: true,
});

module.exports = StageDefinition;