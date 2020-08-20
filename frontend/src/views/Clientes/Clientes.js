import React from "react";
import ClienteRow from "./ClienteRow";
import ClienteForm from "./ClienteForm";
import {
  Table,
  Container,
  Row,
  Button,
  Modal,
  ModalHeader,
  Col,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import NuevoCliente from "./NuevoCliente";
import EditarCliente from "./EditarCliente";
class Clientes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clientes: [], seleccionado: {} };
    this.selectCliente = this.selectCliente.bind(this);
    this.clienteChangeHandler = this.clienteChangeHandler.bind(this);
    this.listadoClientes = this.listadoClientes.bind(this);
    this.updateLista = this.updateLista.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }


  componentWillMount() {
    fetch(`http://localhost:8008/clientes`)
      .then((res) => res.json())
      .then((cliens) => this.setState({ clientes: cliens }));
  }

  render() {
    return (
      <div className="container">
        <Row>&nbsp;</Row>
        <Container fluid>
          <EditarCliente cliente={this.state.seleccionado}
              clienteChanged={this.clienteChangeHandler}
              listadoClientes={this.listadoClientes}
              updateLista={this.updateLista}
              />
          <Button color="success" onClick={this.toggle}>
            Nuevo Cliente
          </Button>

          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>
              <strong>Nuevo</strong>Cliente
            </ModalHeader>

            <NuevoCliente
              cliente={this.state.seleccionado}
              clienteChanged={this.clienteChangeHandler}
              listadoClientes={this.listadoClientes}
              updateLista={this.updateLista}
            />
          </Modal>

          <Row>&nbsp;</Row>
        </Container>

        {/* <ClienteForm cliente={this.state.seleccionado}
           clienteChanged={this.clienteChangeHandler}
           listadoClientes={this.listadoClientes}
           updateLista={this.updateLista}
          /> */}

        <div className="animated fadeIn">
          <Row>
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Clientes Lista
                </CardHeader>
                <CardBody>
                  <Table responsive bordered size="sm">
                    {/* <div className="clientesCSS">
              <h2>{this.props.titulo}</h2>
          <Table className="table" hover> */}
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>nombre</th>
                        <th>cuit</th>
                        <th>email</th>
                      </tr>
                    </thead>
                    <tbody>{this.renderRows()}</tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
  listadoClientes() {
    this.componentWillMount();
  }

  updateLista(unCliente) {
    var updateCliente = this.state.clientes.filter(
      (item) => unCliente.id !== item.id
    );
    this.setState({ clientes: updateCliente });
  }

  selectCliente(unCliente) {
    this.setState({ seleccionado: unCliente });
  }

  clienteChangeHandler(unCliente) {
    var nuevaLista = this.state.clientes.map((item) =>
      item.id !== unCliente.id ? item : unCliente
    );
    this.setState({ clientes: nuevaLista, seleccionado: unCliente });
    //seleccionado:{}????
  }

  deleteCliente(id) {
    this.props.onDelete(id);
};

 

  renderRows() {
    return this.state.clientes.map((unCliente, index) => {
      return (
        <ClienteRow cliente={unCliente}
          selector={this.selectCliente}
          updateLista={this.updateLista}
          clienteChangedHandler={this.clienteChangeHandler}
          onDelete={this.deleteCliente.bind(this)}
          
        />
      );
    })
  }

  
}

export default Clientes;
