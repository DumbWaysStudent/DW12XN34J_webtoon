'use strict';
module.exports = (sequelize, DataTypes) => {
  const episode_images = sequelize.define('episode-images', {
    page: DataTypes.INTEGER,
    image: DataTypes.STRING,
    id_episode: DataTypes.INTEGER
  }, {});
  episode_images.associate = function(models) {
    // associations can be defined here
  };
  return episode_images;
};