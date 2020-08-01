'use strict';
// var expect = require("chai").expect;
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server');
const should = chai.should();
chai.use(chaiHttp)
const {Cliente} = require('./sequelizeConnection.js');



 describe('/GET cliente', () => {
    it('todos los clientes', (done) => {
        chai.request(server)
        .get('/test/unit/models/clientes')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});

