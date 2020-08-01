const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server');
const should = chai.should();
chai.use(chaiHttp)
const {Empresa} = require('./sequelizeConnection.js');


describe('/GET Empresa', () => {
    it('todas las empresas', (done) => {
        chai.request(server)
        .get('/test/empresas')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});


