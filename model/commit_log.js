/* indent size: 2 */
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize");

const Model = sequelize.define('CommitLog', {
  commit_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  hash: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  nonce: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  dateline: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  commit_time: {
    type: DataTypes.DATE,
    allowNull: true
  },
  model: {
    type: DataTypes.INTEGER(1),
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'commit_log'
});


module.exports = Model;