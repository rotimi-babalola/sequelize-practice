'use strict';
/* eslint no-undef:0 */
module.exports = (sequelize, DataTypes) => {
  var TodoItem = sequelize.define('TodoItem', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {});
  TodoItem.associate = (models) => {
    // associations can be defined here
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE',
    });
  };
  return TodoItem;
};
