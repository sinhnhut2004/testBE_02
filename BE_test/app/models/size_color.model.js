module.exports = (sequelize, DataTypes) => {
    const sizeColor = sequelize.define(
      "size_colors",
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
    return sizeColor;
  };
  