const { Sequelize } = require("sequelize");


const sequelize = new Sequelize("emp", "root", "Preeti", {
  host: "localhost",
  dialect: "mysql" 
});


module.exports = sequelize;
