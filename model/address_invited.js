/* indent size: 2 */
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize");

const Model = sequelize.define('AddressInvited', {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  invited_address: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  create_time: {
    type: DataTypes.BIGINT,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'address_invited'
});

module.exports = Model;