const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server');
const should = chai.should();
chai.use(chaiHttp)

describe('/GET usuario', () => {
    it('todos los usuarios', (done) => {
        chai.request(server)
        .get('/test/usuarios')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});


