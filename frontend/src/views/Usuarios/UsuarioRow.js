import React from 'react';
import { Button } from 'reactstrap';


class UsuarioRow extends React.Component {
  
    constructor(props) {
        super(props);
        this.selectUsuario = this.selectUsuario.bind(this);
    }

    selectUsuario() {
      this.props.selector(this.props.usuario)
    }


    render() {

      return (
        <tr key={this.props.usuario.id} onClick={this.selectUsuario}>
          {/* <td>{this.props.usuario.img}</td> */}
          <td>aca va img de usuario</td>
          <td>{this.props.usuario.id}</td> 
          <td>{this.props.usuario.nombre}</td>
          <td>{this.props.usuario.cuit}</td>
          <td>{this.props.usuario.email}</td>
          {/* <Button onClick= {this.seleccionarUsuario} outline color="primary"> seleccionar</Button> */}
          {/* <Button onClick={()=> this.borrarUsuario(this.props.empresa.id)} outline color="danger">Borrar</Button> */}
          
      </tr>)
  
    }


}
  export default UsuarioRow
