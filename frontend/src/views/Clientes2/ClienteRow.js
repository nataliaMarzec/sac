import React from 'react';

class ClienteRow extends React.Component {

    constructor(props) {
        super(props);
        this.selectorCliente = this.selectorCliente.bind(this);
    }
    
    selectorCliente() {
        this.props.selector(this.props.cliente)
    }

    render() {      
        return(
            <tr key={this.props.cliente._id} onClick={this.selectorCliente}>
            <td>{this.props.cliente._id}</td> 
              <td>{this.props.cliente.nombre}</td>
              <td>{this.props.cliente.email}</td>
          </tr>)
      
    }
}

  export default ClienteRow


