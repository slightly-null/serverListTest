const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize");

  const Model = sequelize.define('EggTransaction', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    form_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    to_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    value: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'egg_transaction'
  });

  module.exports = Model;