const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize");

  const Model = sequelize.define('ItemCommitLog', {
    item_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    nonce: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    hv: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deadline: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    create_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'item_commit_log'
  });

  module.exports = Model;