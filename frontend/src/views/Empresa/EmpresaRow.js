import React from 'react';
import { Button } from 'reactstrap';

class EmpresaRow extends React.Component {
  
    constructor(props) {
        super(props);
        this.seleccionarEmpresa = this.seleccionarEmpresa.bind(this);
        this.deleteHandler=this.deleteHandler.bind(this);
        this.onDelete=this.onDelete.bind(this)
    }

    seleccionarEmpresa() {
        this.props.selector(this.props.empresa);
    }

    onDelete(){
      this.props.updateLista(this.props.empresa);
    }

  
    deleteHandler(_id) {
      fetch("http://localhost:3004/empresa/" +_id, {
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
        <td>{this.props.empresa.id}</td> 
          <td>{this.props.empresa.nombre}</td>
          <td>{this.props.empresa.cuit}</td>
          <td>{this.props.empresa.email}</td>
          <Button onClick= {this.seleccionarEmpresa} outline color="primary"> seleccionar</Button>
          <Button onClick={()=> this.deleteHandler(this.props.empresa.id)} outline color="danger">Borrar</Button>
          
      </tr>)
  
    }


}
  export default EmpresaRow
