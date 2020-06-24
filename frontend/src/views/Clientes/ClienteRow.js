import React from 'react';
import { Link } from 'react-router-dom';
import {Button,Badge,Col, Row } from 'reactstrap';


export default function ClienteRow(props) {
  

 //validaciones=>static propTypes{title: PropTypes.string.isRequired};
   
 const cliente = props.cliente
 const clienteLink_id = `/clientes/${cliente.id}`
  

const getBadge = (estado) => {
    return estado === 'Activo' ? 'success' :
      estado === 'Inactivo' ? 'warning':
    estado === 'Pendiente' ? 'info':
 'success'
      }
   
const  handleDeleteClick = (_id) =>{
    const requestOptions ={ 
     method: 'DELETE'
  };
    fetch("http://localhost:3004"+ id,requestOptions)
	.then(response => response.json())
        .then((result) =>{
      this.props.updateLista(this.props.cliente)
   });
  }
  
  //seleccionarCliente= this.props.selector(this.props.cliente);

    



  return (
    <tr key={cliente.id.toString()}>

      <th scope="row"><Link to={clienteLink_id}>{cliente.id}</Link></th>

      <td><Link to={clienteLink_id}>{this.props.cliente.id}</Link></td>
      <td>{this.props.cliente.nombre}</td>
      <td>{this.props.cliente.cuit}</td>
      <td>{this.props.cliente.email}</td>
     {/* <td><Link to={clienteLink_id}><Badge color={getBadge(cliente.estado)}>{cliente.estado}</Badge></Link></td>*/}
      {/*Botones clientes:*/}
       <Row className="align-items-center">
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
  )
  
  

}
