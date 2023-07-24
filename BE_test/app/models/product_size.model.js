module.exports = (sequelize, DataTypes) => {
    const productSize = sequelize.define(
      "product_sizes",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
    return productSize;
  };
  