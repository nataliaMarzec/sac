import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usuariosData from './UsuariosData'

class Usuario extends Component {

  render() {

    const usuario= usuariosData.find( usuario => usuario.id.toString() === this.props.match.params.id)

    const usuarioDetalles = usuario ? Object.entries(usuario) : [['id', (<span><i className="text-muted icon-ban"></i> No encuentra usuario</span>)]]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>Usuario id: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                      {
                        usuarioDetalles.map(([key, value]) => {
                          return (
                            <tr key={key}>
                              <td>{`${key}:`}</td>
                              <td><strong>{value}</strong></td>
                            </tr>
                          )
                        })
                      }
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

export default Usuario;
