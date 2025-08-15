const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

// Import models
const User = require('./user.model')(sequelize, DataTypes);
// Add more models here based on your DB schema

// Associations example:
// User.hasMany(Post);
// Post.belongsTo(User);

sequelize.sync({ alter: true })
  .then(() => console.log("Database synced"))
  .catch(err => console.error(err));

module.exports = {
  sequelize,
  User
};
