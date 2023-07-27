"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Role, Store, Follow, Cart, Feedback, Product_review, Notification, User_role, Order}) {
      // define association here
        this.hasMany(User_role,{
            foreignKey: "userId",
        })
        this.hasOne(Store,{
            foreignKey: "userId",
        })
        // this.belongsToMany(Store, {
        //     through: "follow",
        //     foreignKey: "userId",
        // })
        this.hasMany(Follow,{
            foreignKey: "userId",
        })

        this.hasOne(Cart, {
            foreignKey: "userId",
        })

        this.hasMany(Feedback, {
            foreignKey: "userId",
        })

        this.hasMany(Product_review, {
            foreignKey: "userId",
        })

        this.hasMany(Notification, {
            foreignKey: "userId",
        })

        this.hasMany(Order, {
            foreignKey: "userId",
        })

    }
  }
  User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        fullname: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        phone_number: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        
    },
    {
        timestamps: false,
        sequelize,
        modelName: "User",
        tableName: "users",
      }
  );
  return User;
};