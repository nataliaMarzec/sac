import React from 'react';
import { Button } from 'reactstrap'

class ClienteRow2 extends React.Component {
  
    constructor(props) {
        super(props)
        this.seleccionarCliente = this.seleccionarCliente.bind(this)
        this.deleteHandler=this.deleteHandler.bind(this)
        this.onDelete=this.onDelete.bind(this)
        
    }
    seleccionarCliente() {
        this.props.selector(this.props.cliente);
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
    
    render() {

      return (
      <tr>
        <td>{this.props.cliente._id}</td> 
          <td>{this.props.cliente.nombre}</td>
          <td>{this.props.cliente.cuit}</td>
          <td>{this.props.cliente.email}</td>
          
        <Button onClick= {this.seleccionarCliente} outline color="primary"> seleccionar</Button>
        <Button onClick={()=> this.deleteHandler(this.props.cliente.id)} outline color="danger">Borrar</Button>

      </tr>)
  
    }


}
  export default ClienteRow2
