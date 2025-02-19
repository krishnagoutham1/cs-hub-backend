const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");

dotenv.config();

const PORT = process.env.PORT;

const app = express();

// Mysql connection
connectDB();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
