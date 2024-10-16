const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); 

const Department = sequelize.define('Department', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'departments', 
  timestamps: false,
});

module.exports = Department;
