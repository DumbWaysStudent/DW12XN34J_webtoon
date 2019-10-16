'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('episode-images',
   [
     {
       page: 1,
       image:'https://cdn.komikcast.com/wp-content/img/O/Ore%20wo%20Suki%20Nano%20wa%20Omae%20Dake%20ka%20yo/001/001.jpg',
       id_episode:1,
     },
     {
       page: 2,
       image:'https://cdn.komikcast.com/wp-content/img/O/Ore%20wo%20Suki%20Nano%20wa%20Omae%20Dake%20ka%20yo/001/005.jpg',
       id_episode:1,
     },
     {
       page:3,
       image:'https://cdn.komikcast.com/wp-content/img/O/Ore%20wo%20Suki%20Nano%20wa%20Omae%20Dake%20ka%20yo/001/006.jpg',
       id_episode:1,
     },
   ],
   {},
   );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episode-images', null, {});
  },
};
