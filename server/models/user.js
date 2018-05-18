const bcrypt = require('bcrypt');

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
  }, {
      hooks: {
        beforeCreate: (user) => {
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
        },
      },
    });
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Todo, {
      foreignKey: 'userId',
      as: 'userTodos',
    });
  };
  return User;
};
