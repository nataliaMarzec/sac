import React from 'react';
import { Button } from 'reactstrap';

class ChoferRow extends React.Component {
  
    constructor(props) {
        super(props);
        this.seleccionarChofer = this.seleccionarChofer.bind(this);
        this.deleteHandler=this.deleteHandler.bind(this);
        this.onDelete=this.onDelete.bind(this)
    }

    seleccionarChofer() {
        this.props.selector(this.props.chofer);
    }

    onDelete(){
      this.props.updateLista(this.props.chofer);
    }

  
    deleteHandler(id) {
      fetch("http://localhost:8008/choferes/" +id, {
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
        <td>{this.props.chofer.id}</td> 
          <td>{this.props.chofer.nombre}</td>
          <td>{this.props.chofer.dni}</td>
          <td>{this.props.chofer.enViaje ? "si" : "no" }</td>
          <Button onClick= {this.seleccionarChofer} outline color="primary"> seleccionar</Button>
          <Button onClick={()=> this.deleteHandler(this.props.chofer.id)} outline color="danger">Borrar</Button>
          
      </tr>)
  
    }


}
  export default ChoferRow