'use strict';

module.exports = app => {
  const {
    UUID,
    UUIDV1,
    STRING,
  } = app.Sequelize;
  const User = app.model.define('user', {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV1,
    },
    username: {
      type: STRING(20),
      allowNull: false,
    },
    password: {
      type: STRING(16),
    },
    name: STRING(20),
    gender: STRING(2),
    avatar: STRING(200),
    email: STRING(200),
    phone: STRING(20),
    description: STRING(500),
  });

  return User;
};
