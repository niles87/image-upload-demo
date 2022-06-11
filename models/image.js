const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

class Image extends Sequelize.Model {}

Image.init(
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    imageName: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    imageURL: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "Image",
    freezeTableName: true,
  }
);

module.exports = Image;
