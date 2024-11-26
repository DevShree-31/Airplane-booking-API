'use strict';
const {
  Model
} = require('sequelize');
const {ENUM}=require('../utils/common')
const {BUSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS}=ENUM.SEAT_TYPE
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane,{
        foreignKey:'airplaneId'
      });
    }
  }
  Seat.init({
    airplaneID: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    row: {
      type:DataTypes.INTEGER,
    allowNull:false
    },
    col: {
      type:DataTypes.STRING,
      allowNull:false
    },
    class: {
      type:DataTypes.ENUM,
      values:[BUSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS],
      defaultValue:ECONOMY,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};