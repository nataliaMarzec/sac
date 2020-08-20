import React from "react";
import { Button } from "reactstrap";

class ClienteRow extends React.Component {
  constructor(props) {
    super(props);
    this.state={cliente:props.cliente}
    this.seleccionarCliente = this.seleccionarCliente.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.deleteCliente=this.deleteCliente.bind(this);
  }


  seleccionarCliente() {
    this.props.selector(this.props.cliente);
  }

  deleteCliente(id) {
    var answer = window.confirm("¿ELIMINAR  " +this.state.cliente.nombre+" ?");
    if (answer) {
      this.deleteHandler(id);
    }
  }

  onDelete() {
    this.props.updateLista(this.props.cliente);
  }

  deleteHandler(id) {
    fetch("http://localhost:8008/clientes/" + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(this.onDelete);
  }

//
  estadoInicial() {
    this.setState({ cliente: { nombre: "", dni: "", email: "" } });
  }
  componentWillReceiveProps(props) {
    this.setState({ cliente: props.cliente });
  }

  onEdit(unCliente){
    this.seleccionarCliente();
    this.sendHandler();
  }
  sendHandler(event) {
    fetch("http://localhost:8008/clientes", {
      method: "put",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.cliente),
    })
      .then((res) => this.props.clienteChanged(this.state.cliente))
      .then((res) => this.estadoInicial);
    event.preventDefault();
  }
  
 

  render() {

    return (
      <tr>
        <td>{this.props.cliente.id}</td>
        <td suppressContentEditableWarning="true" contentEditable="true">{this.props.cliente.nombre}</td>
        <td contentEditable="true">{this.props.cliente.cuit}</td>
        <td contentEditable="true">{this.props.cliente.email}</td>
        &nbsp;&nbsp;
        <Button onClick={this.seleccionarCliente} outline color="primary">
          {" "}
          seleccionar
        </Button>
        &nbsp;&nbsp;
        {/* <Button color="primary" size="sm" onClick={this.sendHandler}>Guardar</Button>{' '} */}
        {/* <Button
          onClick={() => this.deleteHandler(this.props.cliente.id)}
          outline
          color="danger"
        >
          Borrar
        </Button> */}
        &nbsp;&nbsp;
        <Button
          color="danger"
          size="sm"
          onClick={()=> this.deleteCliente(this.props.cliente.id)}
        >
          <i className="fa fa-ban"></i>Borrar
        </Button>{" "}
      </tr>
    );
  }
}
export default ClienteRow;
