'use strict';

module.exports = app => {
  const {
    STRING,
    UUID,
    UUIDV1,
  } = app.Sequelize;

  const Role = app.model.define('role', {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV1,
    },
    name: {
      type: STRING(12),
      unique: true,
    },
    career: STRING(12),
    level: STRING(6),
    camp: STRING(12),
    gender: STRING(2),
    painter: STRING(12),
    cv: STRING(12),
    speciality: STRING(100),
    tag: STRING(100),
    acquisition: STRING(100),
    description: STRING(500),
  });

  return Role;
};
