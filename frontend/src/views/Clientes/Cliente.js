import React,{Component} from 'react';
import {Button,Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

//import clientesData from './ClientesData'
import Clientes from './Clientes'

class Cliente extends React.Component{
   constructor(props){
       super(props)
       this.cliente=props.cliente
       this.listadoClientes=this.listadoClientes.bind(this)
       //this.state={cliente:this.state.unCliente.cliente,
       //           clientes:this.state.unCliente.listadoClientes}

     
  }  
   

  //componentWillReceive(props){
  // this.state={clientes:this.state.clientes,
  // cliente:this.state.cliente}
   //this.setState({cliente:cliente})
  // this.setState({clientes:clientes})
//}

  componentWillReceive(props){
  this.setState({listadoClientes:this.props.listadoClientes})
  
  }
  
  componentDidMount() {
    fetch(`http://localhost:3004/clientes`)
      .then( res => res.json())
      .then( cliens => this.setState({clientes: cliens}));
  }
  
 
  render(props) {
   //const listadoClientes= this.props.listadoClientes;

    {/*--machea con los parametros de clientesData*/}
    {/* const cliente = clientesData.find( cliente => cliente.id.toString() === this.props.match.params.id)*/}
   
   const cliente =this.listadoClientes.find( cliente => cliente.id.toString() === this.props.match.params.id)
  
 
    const clienteDetalles = cliente ? Object.entries(cliente) : [['id', (<span><i className="text-muted icon-ban"></i> No encuentra Cliente</span>)]]

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
                <Button block color="info">Facturar</Button>
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
 listadoClientes(){
 this.componentDidMount()
}


}

export default Cliente;
