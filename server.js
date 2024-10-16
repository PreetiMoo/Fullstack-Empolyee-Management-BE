require("dotenv").config();
const express = require("express");
const Sequelize = require("sequelize");
const cors = require("cors");


const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: 'mysql',
  logging: false
});


sequelize.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });


const app = express();
const port = process.env.PORT || 8000; 


app.use(express.json());

app.use(cors()); 



app.use('/login', require('./routes/login'));
app.use('/emp', require('./routes/emp'));
app.use('/dept', require('./routes/dept'));
app.use('/logout', require('./routes/logout')); 


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
