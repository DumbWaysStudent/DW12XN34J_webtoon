'use strict';
module.exports = (sequelize, DataTypes) => {
  const page = sequelize.define('page', {
    page: {type:DataTypes.INTEGER,
          allowNull:false,
          validate:{
            notEmpty: true
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
              allowNull: false,
              validate: {
                notEmpty: true
              }
    }
  }, {});
  page.associate = function(models) {
    // associations can be defined here
    page.belongsTo(models.episode, {
      as:"episodeId",
      foreignKey: "id_episode"
    });
  };
  return page;
};