'use strict';
module.exports = (sequelize, DataTypes) => {
  const pagee = sequelize.define('pagee', {
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
                allowNull: false,
                validate: {
                  notEmpty: true
                }
    }
  }, {});
  pagee.associate = function(models) {
    // associations can be defined here
    pagee.belongsTo(models.episode, {
      as:"episodeId",
      foreignKey: "id_episode"
    });
  };
  return pagee;
};