'use strict';
var faker = require('faker');



module.exports = {
    up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Vouchers', [{
      cantidadComprobantesARegistrar:'1',
      puntoVenta:'1',
      comprobanteTipo:'6',
      concepto: '1',
      tipoDocumento: '80',
      nroDocumento:'20111111112',
      comprobanteDesde:'1',
      comprobanteHasta:'1',
      comprobanteFecha:faker.date.past(),
      importeTotal:'134.5',
      ImporteNetoNoGravado:'0',
      importeNetoGravado:'0',
      importeExentoIva:'0',
      importeIva:'26.25',
      importeTributos:faker.finance.account(),
      fechaServDesde:null,
      fechaServHasta:null,
      FechaVtoPago:null,
      tipoMoneda:'PES',
      monotizacionMoneda:'1',
    }],
    {
      createdAt:null,
      updatedAt: new Date()
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Vouchers');
  }
};