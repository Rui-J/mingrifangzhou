'use strict';
module.exports = app => {
  const {
    UUID,
    UUIDV1,
    STRING,
    INTEGER,
    TEXT,
  } = app.Sequelize;
  const Comment = app.model.define('comment', {
    id: {
      type: UUID,
      defaultValue: UUIDV1,
      primaryKey: true,
    },
    from: {
      type: UUID,
      allowNull: false,
    },
    to: {
      type: UUID,
      allowNull: false,
    },
    like: {
      type: INTEGER,
      defaultValue: 0,
    },
    content: TEXT,
    image: STRING(500),
  });
  return Comment;
};
