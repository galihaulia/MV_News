'use strict';
module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    author: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {});
  News.associate = function(models) {
    // associations can be defined here
  };
  return News;
};