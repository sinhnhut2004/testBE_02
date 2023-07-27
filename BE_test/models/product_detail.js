"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product, Size, Color  }) {
      // define association here
      this.belongsTo(Product, {
        foreignKey: "productId",
      })
      this.belongsTo(Size, {
        foreignKey: "sizeId",
      })
      this.belongsTo(Color, {
        foreignKey: "colorId",
      })
      
    }
  }
  Product_detail.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      image: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
      },
    },
  {
      sequelize,
      timestamps: false,
      indexes:[
        {
          unique: true,
          fields:['productId', 'sizeId', 'colorId'],
        }
       ],
      modelName: "Product_detail",
      tableName: "product_detail",
    }
  );
  return Product_detail;
};