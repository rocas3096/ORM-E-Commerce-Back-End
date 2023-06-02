// Importing the necessary modules
const { Model, DataTypes } = require("sequelize");

// Importing the sequelize connection
const sequelize = require("../config/connection.js");

// Initializing the Tag model by extending the Sequelize's Model class
class Tag extends Model {}

// Setting up the fields and rules for the Tag model
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;
