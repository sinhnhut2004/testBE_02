module.exports = (sequelize, DataTypes) => {
  const livestreamProducts = sequelize.define(
    "livestream_products",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
      order: {
        type: DataTypes.INTEGER,
      },
      expected_sell: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
  return livestreamProducts;
};
