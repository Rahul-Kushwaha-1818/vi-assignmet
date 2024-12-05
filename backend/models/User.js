const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust this path to your `db.js`

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(100), // Matches varchar(100)
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(110), // Matches varchar(110)
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(200), // Matches varchar(200)
    allowNull: false,
  },
}, {
  tableName: 'userinfo', // Explicitly define the table name
  timestamps: false, // Disable `createdAt` and `updatedAt` since your table doesn't have these fields
});

module.exports = User;
