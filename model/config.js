const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize");

  const Model = sequelize.define('Config', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    config_key: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    config_value: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'config'
  });

  module.exports = Model;