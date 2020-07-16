import React from 'react';
import { Button,Col ,Row} from 'reactstrap'
import {Route,Link,Switch} from 'react-router-dom';
class ClienteRow extends React.Component {
  
    constructor(props) {
        super(props)
        this.seleccionarCliente = this.seleccionarCliente.bind(this)
        this.deleteHandler=this.deleteHandler.bind(this)
        this.onDelete=this.onDelete.bind(this)
        this.cliente = props.cliente
        this.clienteLink = `/clientes/${this.props.cliente.id}`
    }

   
  // function ClienteRow(props) {
  // const getBadge = (estado) => {
  //   return estado === 'Activo' ? 'success' :
  //     estado === 'Inactivo' ? 'warning':
  //   estado === 'Pendiente' ? 'info':
  //   'success'
  //     }

    seleccionarCliente(unCliente) {
        this.props.cliente(unCliente);
    }
   
    onDelete(){
      this.props.updateLista(this.props.cliente);
    }

    deleteHandler(id) {
       fetch('http://localhost:3004/clientes/'+id, {
          method: 'DELETE',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
        }).then(this.onDelete)
    }
     // <tr key={this.props.cliente.id.toString()}>
     //<td><Link to={clienteLink_id}><Badge color={getBadge(cliente.estado)}>{cliente.estado}</Badge></Link></td>
    render() {

      return (
      
      
     
      <tr>
        <th scope="row"><Link to={this.clienteLink}>{this.props.cliente.id}</Link></th>
          <td>{this.props.cliente.nombre}</td>
		  <td>{this.props.cliente.cuit}</td>
          <td>{this.props.cliente.email}</td>    
     <Row className="align-items-center">
     <Col col="12" sm="6" md="2" xl className="mb-3 mb-xl-0"> 
        <Button onClick={()=> this.seleccionarCliente(this.props.cliente)} outline color="primary"> seleccionar</Button>
        </Col> 
     <Col col="12" sm="6" md="2" xl className="mb-3 mb-xl-0"> 
        <Button onClick={()=> this.deleteHandler(this.props.cliente.id)} outline color="danger">Borrar</Button>
      </Col>
     </Row>
      </tr>
  
      )
    
    }


}
  export default ClienteRow








  
//   return (
//     <tr key={cliente.id.toString()}>
//       <th scope="row"><Link to={clienteLink}>{cliente.id}</Link></th>
//       <td><Link to={clienteLink}>{cliente.nombre}</Link></td>
//       <td>{cliente.cuit}</td>
//       <td>{cliente.email}</td>

//       <Row className="align-items-center">
//         <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
//         <Button block color="danger" onClick={()=>this.handleDeleteClick(cliente.id)} outline>Delete</Button>
//               </Col>
             
//             </Row>

      
//     </tr>
//   )
// }

{/* <Row className="align-items-center">
<Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
  <Button block color="primary">Update</Button>
</Col>
 <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
  <Button block color="success" onClick= {this.seleccionarCliente} outline >Save</Button>
</Col>
<Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
  <Button block color="danger" onClick={()=> handleDeleteClick(this.props.cliente.id)} outline>Delete</Button>
</Col>

</Row>


</tr>
) */}
