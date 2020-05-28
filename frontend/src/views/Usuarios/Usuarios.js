import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usuariosData from './UsuariosData'

function UsuarioRow(props) {
  const usuario = props.usuario
  const usuarioLink = `/usuario/${usuario.id}`

  return (
    <tr key={usuario.id.toString()}>
      <th scope="row"><Link to={usuarioLink}>{usuario.id}</Link></th>
      <td><Link to={usuarioLink}>{usuario.name}</Link></td>
      <td>{usuario.registered}</td>
      <td>{usuario.role}</td>
    </tr>
  )
}

class Usuarios extends Component {

  render() {

    const usuarioList = usuariosData.filter((usuario) => usuario.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>Usuarios <small className="text-muted">listado</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">registered</th>
                      <th scope="col">role</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {usuarioList.map((usuario, index) =>
                      <UsuarioRow key={index} usuario={usuario}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Usuarios;
