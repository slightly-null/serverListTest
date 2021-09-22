const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize");

  const Model = sequelize.define('TokenInfo', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    chainid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    token_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    token_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cretae_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    precision: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'token_info'
  });

module.exports = Model;