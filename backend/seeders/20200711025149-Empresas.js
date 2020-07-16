'use strict';
var faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Empresas', [
      {
        nombre: faker.company.companySuffix(),
        cuit:27302223333,
        email:faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },
 
 

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Empresas', null, {});
     }
   
  
};
