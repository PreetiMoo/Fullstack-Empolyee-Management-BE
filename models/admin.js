const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); 

const Admin = sequelize.define('Admin', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'admins', 
  timestamps: false,
});

module.exports = Admin;
