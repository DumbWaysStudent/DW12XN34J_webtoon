'use strict';
module.exports = (sequelize, DataTypes) => {
  const webtoon = sequelize.define('webtoon', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    is_favorite: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    created_by: DataTypes.INTEGER
  }, {});
  webtoon.associate = function(models) {
    // associations can be defined here
  };
  return webtoon;
};