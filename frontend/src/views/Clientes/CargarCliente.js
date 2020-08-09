import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class CargarCliente extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cliente: props.cliente, clientes: props.clientes };
    this.changeHandler = this.changeHandler.bind(this);
    this.estadoInicial = this.estadoInicial.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  estadoInicial() {
    this.setState({
      cliente: {nombre: "", cuit: "", email: ""},
    });
  }

  componentWillMount() {
    this.props.listadoClientes();
  }

  componentWillReceiveProps(props) {
    this.setState({ cliente: props.cliente });
    this.setState({ clientes: props.listadoClientes });
  }

  changeHandler(event) {
    var nuevoCliente = Object.assign({}, this.state.cliente);
    nuevoCliente[event.target.name] = event.target.value;
    this.setState({ cliente: nuevoCliente });
  }

  onSubmit(event) {
    if (this.state.cliente.id) {
      this.sendHandler(event);
    } else {
      this.addHandler();
    }
    event.preventDefault();
  }

  sendHandler(event) {
    fetch("http://localhost:8008/clientes", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => this.props.clienteChange(this.state.cliente))
      .then((res) => this.estadoInicial());

    event.preventDefault();
  }

  addHandler() {
    fetch("http://localhost:8008/clientes", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.cliente),
    })
      .then(this.props.listadoClientes)
      .then(this.estadoInicial())
  }
      // let cliente = { ...this.state.cliente };
    // console.log("estado de cliente_____", cliente);
    // console.log("listadoClientes_______", { ...this.props.listadoClientes });
          // .then((res) => console.log("res_________", this.props.listadoClientes))
      // .then((res) => this.estadoInicial());
    // event.preventDefault();

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="exampleName">Nombre</Label>
          <Input
            type="text"
            name="nombre"
            id="exampleNombre"
            value={this.state.cliente.nombre || ""}
            onChange={this.changeHandler}
            placeholder="Delfina Baldaccino"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplerazonsocial">Cuit</Label>
          <Input
            type="text"
            name="cuit"
            id="exampleRazonsocial"
            value={this.state.cliente.cuit || ""}
            onChange={this.changeHandler}
            placeholder="GipsyCode"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            value={this.state.cliente.email || ""}
            onChange={this.changeHandler}
            placeholder="del708@gmail.com"
          />
        </FormGroup>

        <FormText color="muted">
          AL PRESIONAR EL BOTON SIGUIENTE AGREGAS O ACTUALIZAS
        </FormText>
        <Button type="submit" outline color="success">
          Agregar/Actualizar
        </Button>
      </Form>
    );
  }
}
export default CargarCliente;
