"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product, Size, Product_detail }) {
      // define association here
      // this.belongsToMany(Size, {
      //   through: Product_detail,
      //   foreignKey: "colorId",
      // })
  
      // this.belongsToMany(Product, {
      //   through: Product_detail,
      //   foreignKey: "colorId",
      // })
      this.hasMany(Product_detail,{
        foreignKey: "colorId",
      })
      
    }
  }
  Color.init( {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      color_name: {
        type: DataTypes.STRING,
      },
    },
    {
        timestamps: false,
        sequelize,
        modelName: "Color",
        tableName: "colors",
      }
    );
  return Color;
};