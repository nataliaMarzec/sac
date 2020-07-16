import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class ClienteForm2 extends React.Component {
    constructor(props) {
      super(props)
      this.state={cliente: props.cliente,clientes:this.props.clientes} 
      // if (!this.props.cliente===null) {
      //   this.state = {cliente: props.cliente};
      // } else {
      //   this.state = {cliente: {id:"", nombre: "", cuit: "", email:"" }};
      // }
      this.changeHandler = this.changeHandler.bind(this)
      this.estadoInicial=this.estadoInicial.bind(this)
      this.onSubmit=this.onSubmit.bind(this)
    }



componentWillReceiveProps(props) {
  this.setState({ cliente: props.cliente });
  this.setState({ clientes: props.clientes });
}


 componentWillMount = () => {
      this.props.listadoDeClientes();
};

    changeHandler(event) {
       console.log("entrar al handle..." + event);
        var nuevoCliente = Object.assign({}, this.state.cliente)
        nuevoCliente[event.target.name] = event.target.value
        this.setState({cliente: nuevoCliente})}

    onSubmit(event){
          if(this.state.cliente.id){
        //    this.sendHandler(event)
        //   }else {
           this.addHandler(event)
        }
    }

    estadoInicial(){
      this.setState({ cliente: {id:"", nombre: "",cuit: "",email:"" }});
    }

      
    // sendHandler(event) {
    //     fetch('http://localhost:3004/clientes', {
    //         method: 'PUT',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //        body: JSON.stringify(this.state.cliente)
    //     }).then(this.props.listadoDeClientes())
    //       .then(this.estadoInicial());
    //     // event.preventDefault();
    // }

     

  addHandler(event) {
      fetch('http://localhost:3004/clientes', {
          method: 'post',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
            body: JSON.stringify(this.state.cliente)
          })
          .then(this.props.listadoDeClientes)
          // .then(this.estadoInicial());
          event.preventDefault();
  }


searchCliente(unCliente){
  fetch(`http://localhost:3004/clientes/cliente/` + unCliente)
 .then(res => res.json()).then(cliens =>
   this.setState({ unCliente:cliens }, this.addHandler(cliens))
 );
}

    render() {

      return (
        <Form onSubmit={this.onSubmit}>  
          <FormGroup>
          <Label for="exampleName">Nombre</Label>
          <Input type="text" name="nombre" id="exampleNombre" value={this.state.cliente.nombre} 
           onChange={()=>this.changeHandler} placeholder="Leonor Marzec" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleCuit">Cuit</Label>
          <Input type="text" name="cuit" id="examplCuit" value={this.state.cliente.cuit}
          onChange={this.changeHandler} placeholder="27322224443" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" value={this.state.cliente.email}
          onChange={this.changeHandler} placeholder="natimarzec708@gmail.com" />
        </FormGroup>
       

        <FormText color="muted">AL PRESIONAR EL BOTON SIGUIENTE AGREGAS O ACTUALIZAS</FormText>
        <Button type="submit" outline color="success">Agregar/Actualizar</Button>

        
        </Form>
    )
  
    }


}
  export default ClienteForm2
