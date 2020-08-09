import React from "react";
import ClienteRow from "./ClienteRow";
import { Table } from "reactstrap";
import CargarCliente from "./CargarCliente";

class Clientes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clientes: [], seleccionado: {} };
    this.selectCliente = this.selectCliente.bind(this);
    this.clienteChangeHandler = this.clienteChangeHandler.bind(this);
    this.listadoClientes = this.listadoClientes.bind(this);
    this.updateLista = this.updateLista.bind(this);
  }

  componentWillMount() {
    this.listadoClientes();
  }

  estadoInicial() {
    this.setState({
      cliente: {nombre: "", cuit: "", email: ""},
    });
  }

  listadoClientes() {
    fetch(`http://localhost:8008/clientes`)
      .then((res) => res.json())
      .then((clts) => this.setState({ clientes: clts }));
  }

  render() {
    return (
      <div className="container">
        <CargarCliente
          cliente={this.state.seleccionado}
          clienteChange={this.clienteChangeHandler}
          listadoClientes={this.listadoClientes}
          updateLista={this.updateLista}
        />

        <div className="clientesCSS">
          <h2>{this.props.titulo}</h2>

          <Table className="table" hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Cuit</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </Table>
        </div>
      </div>
    );
  }

  updateLista(unCliente) {
    var updateCliente = this.state.clientes.filter(
      (item) => unCliente.id !== item.id
    );
    this.setState({ clientes: updateCliente,cliente:{} });
  }

  selectCliente(unCliente) {
    this.setState({ seleccionado: unCliente });
  }

  clienteChangeHandler(unCliente) {
    var nuevaLista = this.state.clientes.map((item) =>
      item.id !== unCliente.id ? item : unCliente
    );
    this.setState({ clientes: nuevaLista, seleccionado: unCliente });
  }
  


  renderRows() {
    return this.state.clientes.map((unCliente, index) => {
      return (
        <ClienteRow
          key={index}
          cliente={unCliente}
          selector={this.selectCliente}
          updateLista={this.updateLista}
          clienteChangeHandler={this.clienteChangeHandler}
        />
      );
    });
  }
}

export default Clientes;
