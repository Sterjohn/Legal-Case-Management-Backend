const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Client = sequelize.define('Client', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  notes: { type: DataTypes.TEXT }
});

Client.belongsTo(User, { foreignKey: 'userId' });

module.exports = Client;
