const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Role = sequelize.define(
  "Role",
  {
    role_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(50), unique: true, allowNull: false },
  },
  {
    timestamps: true,
    tableName: "roles",
  }
);

module.exports = Role;
