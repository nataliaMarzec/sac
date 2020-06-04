import React, { Component } from 'react';
import {Button,Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import clientesData from './ClientesData'
import Clientes from './Clientes'

class Cliente extends Component {
   constructor(props){
       super(props)
       this.state={clientes:[]}
}

  render() {
    {/*--machea los datos de clientesData*/}
    {/* const cliente = clientesData.find( cliente => cliente.id.toString() === this.props.match.params.id)*/}
    const cliente = this.props.componentDidMount().find(cliente=>cliente.id.toString() === this.props.match.params.id)

    const clienteDetalles = cliente ? Object.entries(cliente) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>

              <CardHeader>
                <strong><i className="icon-info pr-1"></i>Cliente id: {this.props.match.params.id}</strong>
              </CardHeader>

              <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                      {
                        clienteDetalles.map(([key, value]) => {
                          return (
                            <tr key={key}>
                              <td>{`${key}:`}</td>
                              <td><strong>{value}</strong></td>
                          
                 {/*Botones cliente*/}
             <Row className="align-items-center">
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="success">Modificar</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="danger">Eliminar</Button>
                </Col>
            </Row>



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

export default Cliente;
