module.exports = (sequelize, DataTypes) => {
  const Livestream = sequelize.define(
    "livestreams",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      userId_create: {
        type: DataTypes.INTEGER,
      },
      roomId: {
        type: DataTypes.STRING,
      },
      start_time: {
        type: DataTypes.DATE,
      },
      end_time: {
        type: DataTypes.DATE,
      },
      thumbnail: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return Livestream;
};
