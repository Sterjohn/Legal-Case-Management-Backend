const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Client = require('./client');
const User = require('./user');

const Case = sequelize.define('Case', {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  status: { type: DataTypes.STRING, defaultValue: 'open' },
  deadline: { type: DataTypes.DATE }
});

Case.belongsTo(Client, { foreignKey: 'clientId' });
Case.belongsTo(User, { foreignKey: 'userId' });

module.exports = Case;
