import React from 'react';

class ClienteForm extends React.Component {

    constructor(props) {
        super(props);
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {cliente:props.cliente}
      }

      componentWillReceiveProps(props) {
          this.setStcomponentWillReceiveProps(props) {
          this.setState({cliente: props.cliente})
      }


      handleChange(event) {
        var nuevoCliente = Object.assign({}, this.state.nuevoCliente);
        nuevoCliente[event.target.name] = event.target.value;
        this.setState({cliente: nuevoCliente});
      }

      handleSubmit(event) {

        fetch('http://localhost:8888/clientes', {
            method: 'put',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.cliente)
        }).then(res => this.props.clienteChange(this.state.cliente))
          .catch(res => console.log("ERROR") );

        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>Nombre:</label>
            <input type="text" name="nombre" value={this.state.cliente.nombre} onChange={this.handleChange}/>
            <label>Email:</label>
            <input type="text" name="email" value={this.state.cliente.email} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </form>
        );
      }
}

  export default ClienteForm

