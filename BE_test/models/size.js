"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Color, Product, Product_detail }) {
      // define association here
      // this.belongsToMany(Color, {
      //   through: Product_detail,
      //   foreignKey: "sizeId",
      // })
  
      // this.belongsToMany(Product, {
      //   through: Product_detail,
      //   foreignKey: "sizeId",
      // })
      this.hasMany(Product_detail,{
        foreignKey: "sizeId",
      })
    }
  }
  Size.init(
    {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        size_name: {
          type: DataTypes.STRING,
        },
      },
    {
      timestamps: false,
        sequelize,
        modelName: "Size",
        tableName: "sizes",
      }
  );
  return Size;
};