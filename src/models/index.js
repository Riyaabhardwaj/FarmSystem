const Room = require("./room.model");
const AnimalCategory = require("./animalCategory.model");
const StageDefinition = require("./stageDefinition.model");
const AnimalBatch = require("./animalBatch.model");

// Relations
AnimalCategory.hasMany(StageDefinition, { foreignKey: "category_id" });
StageDefinition.belongsTo(AnimalCategory, { foreignKey: "category_id" });

AnimalCategory.hasMany(AnimalBatch, { foreignKey: "category_id" });
AnimalBatch.belongsTo(AnimalCategory, { foreignKey: "category_id" });

StageDefinition.hasMany(AnimalBatch, { foreignKey: "stage_id" });
AnimalBatch.belongsTo(StageDefinition, { foreignKey: "stage_id" });

Room.hasMany(AnimalBatch, { foreignKey: "room_id" });
AnimalBatch.belongsTo(Room, { foreignKey: "room_id" });

module.exports = {
  AnimalCategory,
  StageDefinition,
  AnimalBatch,
};