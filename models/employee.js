const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); 
const Department = require('../models/department'); 

const Employee = sequelize.define('Employee', {
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
  departmentId: {
    type: DataTypes.INTEGER,
    references: {
      model: Department, 
      key: 'id',         
    },
   
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'employees', 
  timestamps: false,
});


Employee.belongsTo(Department, { foreignKey: 'departmentId' });

module.exports = Employee;
