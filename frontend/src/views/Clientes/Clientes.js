import React, { Component } from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import {Button,Badge, Card, CardBody, CardHeader, Col, Row, Table,Form } from 'reactstrap';
import PropTypes from 'prop-types';
//import ClienteForms from './Formulario/ClienteForms.js';
import ClienteForm from './ClienteForm';
import Cliente from './Cliente'

function ClienteRow(props) {
  const cliente = props.cliente
  const clienteLink = `/clientes/${cliente.id}`
  //const clienteLink = {
  //pathname: `/clientes/${cliente.id}`,
 // state: {clientes:this.props.listadoClientes
 // }
      

  

  const getBadge = (estado) => {
    return estado === 'Activo' ? 'success' :
      estado === 'Inactivo' ? 'warning':
    estado === 'Pendiente' ? 'info':
 'success'
      }
  
  const  handleDeleteClick = (id) =>{
    const requestOptions ={ 
     method: 'DELETE'
  };
    fetch("http://localhost:3004"+ id,requestOptions)
	.then(response => response.json())
        .then((result) =>{
      this.props.updateLista(cliente)
   });
  }




   //como traigo el name del routes??
  return (
    <tr key={cliente.id.toString()}>
      <th scope="row"><Link to={clienteLink}>{cliente.id}</Link></th>
     {/* <td><Link to={clienteLink}>{cliente.name}</Link></td>*/}
      <td><Link to={clienteLink}>{cliente.nombre}</Link></td>
      <td>{cliente.cuit}</td>
      <td>{cliente.email}</td>

      <Row className="align-items-center">
        <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
        <Button block color="danger" onClick={()=> handleDeleteClick(cliente.id)} outline>Delete</Button>
              </Col>
             
            </Row>

      
    </tr>
  )
}

class Clientes extends Component {
  constructor(props) {
    super(props);
    this.state ={ clientes: [], seleccionado:{},cliente:{},
                  clienteLink:`/clientes/${cliente.id}`}
    
    this.seleccionarCliente=this.seleccionarCliente.bind(this) 
    this.clienteChangeHandler=this.clienteChangeHandler.bind(this)
    this.listadoClientes=this.listadoClientes.bind(this)
    this.updateLista=this.updateLista.bind(this)
    this.agregarCliente=this.agregarCliente.bind(this)
    this.getCliente=this.getCliente.bind(this)
    this.unCliente=this.unCliente.bind(this)
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
  
 //RouteWithSubRoutes(route) {
 // return (
   //<Route
    //  path={route.path}
    //  render={props => (
        // pass the sub-routes down to keep nesting
     //   <route.Cliente {...props} routes={route.routes} />
     // )}
  //  />
 // );
//}


RouteCliente(cliente){
 return(
   <Route path={"/cliente/:id/" + cliente}
      render={(props) =>
     <Clientes {...props} clientes={this.state.clientes}
      cliente={this.state.cliente} /> 
        }
   />)
}

 
 //unCliente = () => {
   // var unCliente = this.state.seleccionado;
   // return (
    //  <Cliente
     //   cliente={unCliente}
     //  clienteSeleccionado={this.seleccionarCliente}
     //   cliente={this.state.seleccionado}
     //   agregarCliente={this.agregarCliente}
     //   clienteChangeHandler={this.clienteChangeHandler}
     //   listadoClientes={this.listadoClientes}
     //   updateLista={this.updateLista}
     // />
    //);
  //};

  
  

  render(route) {

   const {cliente}= this.state.seleccionado
    //const clienteListaHardcodeada = clientesData.filter((cliente) => cliente.id < 10)
     
    return (
      <div className="animated fadeIn">
        {/*<ClienteForms lo puse aparte
        <ClienteForm 
         cliente={this.state.seleccionado}
        agregarCliente={this.agregarCliente}
        clienteChangeHandler={this.clienteChangeHandler}
        listadoClientes={this.listadoClientes}
        updateLista={this.updateLista}
         />*/}
      <Switch>
        <Route path={"/cliente/:id/" + cliente} 
              render={(props) => <ClienteForm {...props}
          cliente={this.state.seleccionado}
          listadoClientes={this.state.listadoClientes} 
          agregarCliente={this.agregarCliente}
          clienteChangeHandler={this.clienteChangeHandler}
          listadoClientes={this.listadoClientes}
          updateLista={this.updateLista}
/>}/>
      </Switch>

  


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
                    {this.state.clientes.map((cliente,index) => 
                     <ClienteRow key={index} cliente={cliente}
                     listadoClientes={this.listadoClientes}
                     clienteChangeHandler={this.clienteChangeHandler}
                     updateLista={this.updateLista}
                      />
                    )}
                    {/*{this.state.clientes.map((unCliente, index) =>
                      <ClienteRow2 key={index} cliente={unCliente}
                      selector={this.seleccionarCliente}
                      listaActualizada={this.listadoClientes}
                      clienteChangeHandler={this.clienteChangeHandler}
	               updateLista={this.updateLista}
                      />
                    )} */}
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

   agregarCliente(unCliente){
   const{clientes}=this.state
   console.log("clientes")
   this.clientes.push({unCliente})
   this.setState({clientes:clientes})
  }

  getCliente(props){
  const {cliente}=this.state
  console.log("cliente")
  this.setState({cliente:cliente})
  
}

  getClientesData() {
     const{clientes}=this.componentDidMount()
     console.log('clientes + ${clientes}')
     this.setState({clientes:clientes})
    //this.setState({
      //clientes: { [name]: value }
   // })
  }

  






    

}

export default Clientes;
