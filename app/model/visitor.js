'use strict';

module.exports = app => {
  const {
    UUID,
    UUIDV1,
    INTEGER,
  } = app.Sequelize;
  const Visitor = app.model.define('visitor', {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV1,
    },
    name: {
      type: INTEGER,
    },
    role: {
      type: INTEGER,
      defaultValue: 0,
    },
  });

  return Visitor;
};
