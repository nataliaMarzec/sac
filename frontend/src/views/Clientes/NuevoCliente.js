import React, { Component } from "react";
import {
  Col,
  Form,
  FormGroup,
  Button,
  Label,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

class NuevoCliente extends Component {
  constructor(props) {
    super(props);
    this.state = { cliente: props.cliente, modal: false };
    this.changeHandler = this.changeHandler.bind(this);
    this.estadoInicial = this.estadoInicial.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  estadoInicial() {
    this.setState({ cliente: { nombre: "", dni: "", email: "" } });
  }
  componentWillReceiveProps(props) {
    this.setState({ cliente: props.cliente });
  }

  changeHandler(event) {
    var nuevoCliente = Object.assign({}, this.state.cliente);
    nuevoCliente[event.target.name] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState({ cliente: nuevoCliente });
  }

  // sendHandler(event) {
  //   fetch("http://localhost:8008/clientes", {
  //     method: "put",
  //     headers: {
  //       Accept: "application/json, text/plain, */*",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(this.state.cliente),
  //   })
  //     .then((res) => this.props.clienteChanged(this.state.cliente))
  //     .then((res) => this.estadoInicial);
  //   event.preventDefault();
  // }

  addHandler(event) {
    fetch("http://localhost:8008/clientes", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.cliente),
    })
      .then((res) => this.props.listadoClientes())
      .then((res) => this.estadoInicial());
    event.preventDefault();
  }
  // onSubmit(event) {
  //   if (this.state.cliente.id) {
  //     this.sendHandler(event);
  //   } else {
  //     this.addHandler(event);
  //   }
  //   event.preventDefault();
  // }

  render() {
    return (
      <Col xs="12" md="12">
        <ModalBody>
          <Form className="form-horizontal">
            <FormGroup row>
              <Col md="3">
                <Label for="ejnombre">Nombre</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  id="ejnombre"
                  name="nombre"
                  placeholder="Completa Nombre..."
                  required
                  value={this.state.cliente.nombre}
                  onChange={this.changeHandler}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label for="cuit">Cuit</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="number"
                  id="cuit"
                  name="cuit"
                  placeholder="Completa Cuit..."
                  required={true}
                  value={this.state.cliente.cuit}
                  onChange={this.changeHandler}
                />
              </Col>
            </FormGroup>
            {/* <FormGroup row>
              <Col md="3">
                <Label htmlFor="hf-mobile-number">Contact&nbsp;Number</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  id="hf-mobile-number"
                  name="hf-mobile-number"
                  placeholder="Enter Contact Number..."
                  required={true}
                  value={this.state.number}
                  onChange={this.handleNumber}
                />
              </Col>
            </FormGroup> */}
            <FormGroup row>
              <Col md="3">
                <Label for="email">Email</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Completa Email..."
                  required={true}
                  value={this.state.cliente.email}
                  onChange={this.changeHandler}
                />
              </Col>
            </FormGroup>

          </Form>
        </ModalBody>

        <ModalFooter>
          <Button
            type="<submit></submit>"
            color="success"
            // onClick={this.onSubmit.bind(this)}
            onClick={this.addHandler.bind(this)}
          >
            <i className="fa fa-dot-circle-o"></i> Guardar
          </Button>
        </ModalFooter>
      </Col>
    );
  }
}

export default NuevoCliente;
