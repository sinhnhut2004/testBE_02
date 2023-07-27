"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    static associate({ User, Order }) {
      this.belongsTo(User, { 
            foreignKey: "userId",
       });
       this.belongsTo(Order, { 
        foreignKey: "orderId",
   });
    }
  }
  Notification.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
    //   userId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //       model: "User",
    //       key: "id",
    //     },
        
    //   },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    //   orderId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //       model: "Order",
    //       key: "id",
    //     },
       
    //   },
    },
    {
      timestamps: false,
      sequelize,
      modelName: "Notification",
      tableName: "notifications",
    }
  );
  return Notification;
};
