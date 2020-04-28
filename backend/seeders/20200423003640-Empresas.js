'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Empresas', [{
        nombre: 'Magna',
        cuit: '27-29222333-3',
        email: 'Magna@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Empresas', null, {});
  }
};
