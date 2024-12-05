const { Sequelize } = require("sequelize");

// Configure Sequelize to connect to XAMPP's MySQL
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Connected to MySQL (XAMPP)"))
  .catch((err) => console.error("Unable to connect:", err));

module.exports = sequelize;
