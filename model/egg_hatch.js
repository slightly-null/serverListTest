const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize");

  const Model = sequelize.define('EggHatch', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    hatch_total: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    owner_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    uuid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'egg_hatch'
  });

  module.exports = Model;