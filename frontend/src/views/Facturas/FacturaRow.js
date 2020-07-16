import React from 'react';
import { Button } from 'reactstrap';

class FacturaRow extends React.Component {
  
    constructor(props) {
        super(props);
        this.seleccionarFactura = this.seleccionarFactura.bind(this);
        this.deleteHandler=this.deleteHandler.bind(this);
        this.onDelete=this.onDelete.bind(this)
    }

    seleccionarFactura() {
        this.props.selector(this.props.factura);
    }

    onDelete(){
      this.props.updateLista(this.props.factura);
    }

  
    deleteHandler(_id) {
      fetch("http://localhost:3004/facturas/" +_id, {
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
        <td>{this.props.factura.id}</td> 
          <td>{this.props.factura.nombre}</td>
          <td>{this.props.factura.dni}</td>
          <td>{this.props.factura.activo? "si" : "no" }</td>
          <Button onClick= {this.seleccionarFactura} outline color="primary"> seleccionar</Button>
          <Button onClick={()=> this.deleteHandler(this.props.factura.id)} outline color="danger">Borrar</Button>
          
      </tr>)
  
    }


}
  export default FacturaRow
