const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Role = require("./Roles");

const User = sequelize.define(
  "User",
  {
    user_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(100), allowNull: false },
    email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(255), allowNull: false },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Role, key: "role_id" },
    },
  },
  { timestamps: true, tableName: "users" }
);

// Define association
User.belongsTo(Role, { foreignKey: "role_id" });
Role.hasMany(User, { foreignKey: "role_id" });

module.exports = User;
