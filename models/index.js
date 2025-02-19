const { sequelize } = require("../config/db");
const User = require("./User");
const Role = require("./Roles");

// Define relationships
User.belongsTo(Role, { foreignKey: "role_id" });
Role.hasMany(User, { foreignKey: "role_id" });

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // Sync tables
    console.log("✅ Database synced successfully!");
  } catch (error) {
    console.error("❌ Error syncing database:", error);
  }
};

module.exports = { syncDatabase };
