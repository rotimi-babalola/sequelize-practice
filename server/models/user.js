'use strict';
/* eslint no-undef:0 */
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Todo, {
      foreignKey: 'userId',
      as: 'userTodos',
    });
  };
  return User;
};
