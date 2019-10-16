'use strict';
module.exports = (sequelize, DataTypes) => {
  const webtoon = sequelize.define('webtoon', {
    title: {type: DataTypes.STRING,
            allowNull : false,
            validate:{
              notEmpty :true
            }
    },
    genre: DataTypes.STRING,
    is_favorite: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    created_by: DataTypes.INTEGER
  }, {});
  webtoon.associate = function(models) {
    // associations can be defined here
    webtoon.belongsTo(models.user,{
      as:"createdBy",
      foreignKey:'created_by'
    });
  };
  return webtoon;
};