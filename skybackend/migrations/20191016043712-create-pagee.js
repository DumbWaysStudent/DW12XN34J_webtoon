'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pagees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      page: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      id_episode: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'episodes',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      id_webtoon: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'episodes',
          key:'id_webtoon'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pagees');
  }
};