const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gamename extends Model {}

Gamename.init(
    {
        id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
     title: {
         type: DataTypes.STRING,
         allownull: false,
     },
     description: {
    type: DataTypes.STRING,
     allownull: false,
    },},

     {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'games',
  }
);

module.exports = Gamename;