const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const { v4: uuidv4 } = require("uuid");

const Room = sequelize.define(
  "Room",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuidv4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    current_occupancy: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Room;