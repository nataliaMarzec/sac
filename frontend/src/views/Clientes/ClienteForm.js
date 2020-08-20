import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class ClienteForm extends React.Component {
  
    constructor(props) {
      super(props)
      this.state={cliente:props.cliente}
      this.changeHandler = this.changeHandler.bind(this)
      this.estadoInicial=this.estadoInicial.bind(this)
      this.onSubmit=this.onSubmit.bind(this)
       
}

    estadoInicial(){
      this.setState({ cliente: { nombre: "", dni: "",email:""} });

    }
    componentWillReceiveProps(props) {
      this.setState({cliente: props.cliente})
    }

    changeHandler(event) {
        var nuevoCliente = Object.assign({}, this.state.cliente)
        nuevoCliente[event.target.name] = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({cliente: nuevoCliente})
    }

    sendHandler(event) {
        fetch('http://localhost:8008/clientes', {
            method: 'put',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.cliente)
        }).then(res => this.props.clienteChanged(this.state.cliente) )
          .then(res=>this.estadoInicial)
           event.preventDefault();
    }


    addHandler(event) {
      fetch('http://localhost:8008/clientes', {
          method: 'post',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
            body: JSON.stringify(this.state.cliente)
          })
          .then(res =>this.props.listadoClientes() )
          .then(res => this.estadoInicial() );
           event.preventDefault();
  }
  onSubmit(event){
    if(this.state.cliente.id){
     this.sendHandler(event)
    }else {
      this.addHandler(event)
  }
    event.preventDefault()
}

render() {

  return (
    <Form onSubmit={this.onSubmit}>  
      <FormGroup>
      <Label for="ejnombre">Nombre</Label>
      <Input type="text" name="nombre" id="ejnombre" value={this.state.cliente.nombre} 
       onChange={this.changeHandler} placeholder="ej.Diego Adamkzick" />
    </FormGroup>
    <FormGroup>
      <Label for="cuit">Cuit</Label>
      <Input type="number" name="dni" id="dni" value={this.state.cliente.cuit}
      onChange={this.changeHandler} placeholder="30222888" />
    </FormGroup>
    <FormGroup >
      <Label for="email"> Email  </Label>
      <Input type="text" name="email" value={this.state.cliente.email}
      onChange={this.changeHandler}></Input>
    </FormGroup>
  
    <Button type="submit" outline color="success">Agregar/Actualizar</Button>  
    </Form>
)

}


}
export default ClienteForm