'use strict';
module.exports = (sequelize, DataTypes) => {
  const episode = sequelize.define('episode', {
    title: {type: DataTypes.STRING,
            allowNull:false,
            validate:{
              notEmpty:true
            }        
    },
    image: DataTypes.STRING,
    id_webtoon: {type: DataTypes.INTEGER,
                allowNull:false,
                validate:{
                  notEmpty:true
                }
    }
  }, {});
  episode.associate = function(models) {
    episode.belongsTo(models.webtoon, {
      as:'webtoonId',
      foreignKey:'id_webtoon'
    });
  };
  return episode;
};