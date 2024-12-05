const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

sequelize.sync().then(() => console.log("Database synced"));

module.exports = app;
