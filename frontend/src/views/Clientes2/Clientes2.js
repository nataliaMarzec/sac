import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button,Badge, Card, CardBody, CardHeader, Col, Row, Table,Form } from 'reactstrap';
import PropTypes from 'prop-types';
//import ClienteForms from './Formulario/ClienteForms.js';
import ClienteForm from './ClienteForm';
import ClienteRow2 from './ClienteRow2';

class Clientes2 extends React.Component {
  constructor(props) {
    super(props);
    this.state ={ clientes: [], seleccionado:{}}
    this.seleccionarCliente=this.seleccionarCliente.bind(this) 
    this.clienteChangeHandler=this.clienteChangeHandler.bind(this)
    this.listadoClientes=this.listadoClientes.bind(this)
    this.updateLista=this.updateLista.bind(this)
    //this.agregarClienteALista=this.agregarClienteALista.bind(this)
   
   
   }

  
 componentDidMount() {
    fetch(`http://localhost:3004/clientes`)
      .then( res => res.json())
      .then( cliens => this.setState({clientes: cliens}));
  }
  
 // componentWillUnmount() {
    //clearClienteslista(this.clienteID);
    //destroy();
  //}
  
  
 //agregarClienteALista(unCliente){
  // const{clientes}=this.state
   //console.log("clientes")
   //this.clientes.push({unCliente})
  // this.setState({clientes:clientes})
 // }

  


  


  render() {

    //const clienteListaHardcodeada = clientesData.filter((cliente) => cliente.id < 10)
     
    return (
      <div className="animated fadeIn">
        {/*<ClienteForms lo puse aparte*/}
        <ClienteForm 
        cliente={this.state.seleccionado}
        clienteChanged={this.clienteChangeHandler}
        listadoClientes={this.listadoClientes}
        listaActualizada={this.updateLista}
         />
         <div className="ClienteForm"/>
        <Col xl="12" sm="6">
          <Row>
        {/*<Row>*/}
          {/*<Col xl={6}>*/}
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Clientes <small className="text-muted">listado</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">nombre</th>
		              <th scope="col">cuit</th>
                      <th scope="col">mail</th>
		             {/*<th scope="col">estado</th>*/}
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.clientes.map((unCliente, index) =>
                      <ClienteRow2 key={index} cliente={unCliente}
                      selector={this.seleccionarCliente}
                      listaActualizada={this.listadoClientes}
                      clienteChangeHandler={this.clienteChangeHandler}
	                  updateLista={this.updateLista}
                      />
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          {/*</Col>*/}
        {/*</Row>*/}

 {/*comienzo form*/}
        {/*<Row>*/}
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> ClienteForm o cualquier cosa <small className="text-muted">poner otro form</small>
              </CardHeader>
              <CardBody>
              <h1> modificar columnas:Col xs="12" sm="6" lg="3"</h1>
              </CardBody>
            </Card>
        {/* </Col>*/}
        {/*</Row>*/}                 
{/*final form*/}
       
         </Row>
        </Col>
      
      </div>
    )
  }

 listadoClientes(){
 this.componentDidMount();
}

 updateLista(unCliente) {
     var updateCliente= this.state.clientes.filter(
    item => unCliente.id !== item.id 

     );
     this.setState({ clientes: updateCliente });

  }

 seleccionarCliente(unCliente) {
    this.setState({seleccionado: unCliente})
  }

  clienteChangeHandler(unCliente) {
    var nuevaLista = this.state.clientes.map( (item) =>  (item.id !== unCliente.id) ?  item : unCliente   )
    this.setState({clientes: nuevaLista, seleccionado: unCliente})
  }

  componentDidUpdate(prevState,unCliente){
    //if (prevState.cliente !== this.state.unCliente) {
       // this.setState(unCliente);
}







    

}

export default Clientes2;
