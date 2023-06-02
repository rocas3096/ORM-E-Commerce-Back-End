// Importing the necessary modules
const { Model, DataTypes } = require("sequelize");

// Importing the sequelize connection
const sequelize = require("../config/connection.js");

// Defining the Category model
class Category extends Model {}

// Initializing the Category model with column definitions
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
