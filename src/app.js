const express = require("express");
const { connectDB, sequelize } = require("./config/db");
require("dotenv").config();

const app = express();
app.use(express.json());

// Routes
const animalRoutes = require("./routes/animal.routes");
app.use("/api", animalRoutes);

// DB connect + sync
connectDB();

sequelize.sync({ alter: true }).then(() => {
  console.log("✅ Tables synced");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});