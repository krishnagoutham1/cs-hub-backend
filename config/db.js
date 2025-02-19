const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Initialize Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false, // remove to see all the logs
  }
);

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL Connected...");
  } catch (error) {
    console.error("❌ Error connecting to MySQL:", error);
    process.exit(1);
  }
}

module.exports = { sequelize, connectDB };
