'use strict';
module.exports = (sequelize, DataTypes) => {
  const pages = sequelize.define('pages', {
    page: {type: DataTypes.INTEGER,
          allowNull: false,
          validate:{
            notEmpty:true
          }
    },
    image: DataTypes.STRING,
    id_episode: {type: DataTypes.INTEGER,
                allowNull: false,
                validate:{
                  notEmpty:true
                }
    },
    id_webtoon: {type: DataTypes.INTEGER,
                allowNull:false,
                validate:{
                  notEmpty:true
                }
    }
  }, {});
  pages.associate = function(models) {
    // associations can be defined here
    pages.belongsTo(models.episode, {
      as:"episodeId",
      foreignKey: "id_episode"
    });
  };
  return pages;
};