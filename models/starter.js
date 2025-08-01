// models/Item.js

module.exports = (sequelize, DataTypes) => {
  const Start = sequelize.define('Start', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  }, {
    tableName: 'Starts',      // Optional: customize table name
    timestamps: true,       // Disable createdAt/updatedAt
  });

  return Start;
};

