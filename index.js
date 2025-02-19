const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const { syncDatabase } = require("./models");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MySQL
connectDB();

// Sync database
syncDatabase();

app.get("/", (req, res) => {
  res.send("Welcome to DevRecap API 🚀");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
