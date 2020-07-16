import React, { Component } from 'react';
// import {Route,Link,Switch} from 'react-router-dom';
import {Route,Link,Switch} from 'react-router-dom';
import {Button,Badge, Card, CardBody, CardHeader, Col, Row, Table,Form } from 'reactstrap';
import PropTypes from 'prop-types';
// import ClienteForm from '../Clientes/ClienteForm';
import Cliente from './Cliente'
import clientesData from './ClientesData';
import ClienteRow from './ClienteRow'
import ClienteForm2 from './ClienteForm2';



class Clientes extends Component {
  constructor(props) {
    super(props);
    this.state ={clientes: [],cliente:{}}
    // ,cliente:{}
    this.seleccionarCliente=this.seleccionarCliente.bind(this) 
    this.clienteChangeHandler=this.clienteChangeHandler.bind(this)
    this.listadoDeClientes=this.listadoDeClientes.bind(this)
    this.updateLista=this.updateLista.bind(this)
  
    
   }
 
      
  componentWillMount() {
      this.listadoDeClientes();
    }

  estadoInicial(){
      this.setState({ cliente: {id:"", nombre: "",cuit: "",email:"" }});
    }
  
  // listadoDeClientes(){
  //   this.listadoClientes()
  // }
  
  

  



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
  updateClientes(unCliente){
  var updateCliente = this.state.clientes.filter(
    item => unCliente !== item
  );
  this.setState({ clientes: updateCliente, cliente: {} });
}



 listadoDeClientes(){
   fetch(`http://localhost:3004/clientes`)
     .then( res => res.json())
     .then( cliens => this.setState({clientes: cliens}));
   // this.setState({clientes: clientesData})
 }
   

render(){
  // {this.props.render(this.state)}
    return (
      <div className="animated fadeIn">
    
      <ClienteForm2 
        cliente={this.state.cliente}
        updateClientes={this.updateClientes}
        listadoDeClientes={this.listadoDeClientes}
        clientes={this.state.clientes}
      />
         
  
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
                <i className="fa fa-align-justify"></i> ClienteForm  <small className="text-muted">poner otro form</small>
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

//  clientes(){
//   const cliens =this.props.listadoClientes;
//   const { history } = cliens
//   if(history) history.push(cliens);
//  }

  // componentDidUpdate(prevState,unCliente){
    //if (prevState.cliente !== this.state.unCliente) {
       // this.setState(unCliente);
// }

//    agregarCliente(unCliente){
//    const{clientes}=this.state
//    console.log("clientes")
//    this.clientes.push({unCliente})
//    this.setState({clientes:clientes})
//   }

//   setCliente(props){
//   const {cliente}=this.state
//   console.log("cliente")
//   this.setState({cliente:cliente})
  
// }

//   getClientesData() {
//      const{clientes}=this.listadoClientes
//      console.log('clientes + ${clientes}')
//      this.setState({clientes:clientes})
//     this.setState({
//       clientes: { [name]: value }
//    })
//   }

  
  //  <Switch>
  //       <Route path={"/cliente/:id/" + this.state.cliente} 
  //             render={(props) => <ClienteForm2 {...props}
  //                                   cliente={this.state.cliente}
  //                                   clienteChangeHandler={this.clienteChangeHandler}
  //                                   listadoDeClientes={this.listadoDeClientes}
  //                                   updateLista={this.updateLista}
  //                                   clientes={this.state.clientes}
  //                                 />}
  //       />
  //     </Switch> 





 

}
  
export default Clientes;
