const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize");

  const Model = sequelize.define('EventLog', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    block_hash: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    log_index: {
      type: DataTypes.INTEGER(255),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'event_Log'
  });

  module.exports = Model;