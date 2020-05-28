import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button,Badge, Card, CardBody, CardHeader, Col, Row, Table,Form } from 'reactstrap';
import PropTypes from 'prop-types';

//no es necesario el form aca por ahora:

import clientesData from './ClientesData'

function ClienteRow(props) {
 //validaciones=>static propTypes{title: PropTypes.string.isRequired};
 
  
  const cliente = props.cliente
  const clienteLink_id = `/clientes/${cliente.id}`

  const getBadge = (estado) => {
    return estado === 'Activo' ? 'success' :
      estado === 'Inactivo' ? 'warning':
    estado === 'Pendiente' ? 'info':
 'success'
      }
   
  const handleDeleteClick = (_id) =>{
    const requestOptions ={ 
     method: 'DELETE'
  };
    fetch("http://localhost:3001"+ clienteLink_id,requestOptions)
	.then(response => response.json())
        .then((result) =>{
      this.props.componentDidUpdate(this.props.cliente)
   });
  }
  
  const seleccionarCliente= this.props.selector(this.props.cliente);

    

   



  return (
    <tr key={cliente.id.toString()}>

      <th scope="row"><Link to={clienteLink_id}>{cliente.id}</Link></th>

      <td><Link to={clienteLink_id}>{this.props.cliente.id}</Link></td>
      <td>{this.props.cliente.registrado}</td>
      <td>{this.props.cliente.razonSocial}</td>
      <td><Link to={clienteLink_id}><Badge color={getBadge(cliente.estado)}>{cliente.estado}</Badge></Link></td>
      {/*Botones clientes:*/}
       <Row className="align-items-center">
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="primary">Update</Button>
              </Col>
               <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="success" onClick= {this.seleccionarCliente} outline >Save</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="danger" onClick={()=>    this.handleDeleteClick(this.props.cliente.id)} outline>Delete</Button>
              </Col>
             
            </Row>


    </tr>
  )
}

class Clientes extends Component {
  constructor(props) {
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.cambiarAClienteSeleccionado= this.cambiarAClienteSeleccionado.bind(this)
    
    this.state= {clientes: [],seleccionado:{}}

   }
  
  componentDidMount() {
    fetch("http://localhost:3001/clientes")
      .then(res => res.json())
      .then(
        (result) =>
          this.setState({clientes:result.clientes})
      ).then(
        (error) =>
          this.setState({error})
      )
  }
  componentWillUnmount() {
    //clearClienteslista(this.clienteID);
    //destroy();
  }

  
  handleChange(event) {
    this.setState({ name: event.currentTarget.value });
  }


  cambiarAClienteSeleccionado(unCliente) {
    this.setState({seleccionado: unCliente})
  }

  clienteChangeHandler(unCliente) {
    var nuevaLista = this.state.clientes.map( (item) =>  (item.id !== unCliente.id) ?  item : unCliente   )
    this.setState({clientes: nuevaLista, seleccionado: unCliente})
  }

 componentDidUpdate(unCliente) {
     var updateCliente= this.state.clientes.filter(
    item => unCliente.id !== item.id);
     this.setState({clientes: updateCliente });

  }
    
  

  

    

  render() {

    //const clienteListaHardcodeada = clientesData.filter((cliente) => cliente.id < 10)
     
    return (
      <div className="animated fadeIn">
        {/*<ClienteForm lo puse aparte*/}
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
                      <th scope="col">registrado</th>
                      <th scope="col">razonSocial</th>
                      <th scope="col">estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    //o cambiar a la lista hardcodeada
                    {this.state.clientes.map((cliente, index) =>
                      <ClienteRow key={index} cliente={cliente}
                      selector={this.cambiarAClienteSeleccionado}
                      listaActualizada={this.componentDidUpdate}
                      clienteChangeHandler={this.clienteChangeHandler}
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
}

export default Clientes;
