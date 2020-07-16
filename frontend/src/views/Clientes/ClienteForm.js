import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import {listadoClientes} from './Clientes'

class ClienteForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {cliente: props.cliente,
                   clientes: props.clientes,
                   unCliente:[]}
      this.changeHandler=this.changeHandler.bind(this)
      this.estadoInicial=this.estadoInicial.bind(this)
      this.onSubmit=this.onSubmit.bind(this)
      // if (this.props.cliente) {
      //   this.state = {cliente: props.cliente};
      // } else {
      //   this.state = {cliente: {id:"",nombre:"",cuit:"",email:"" }};
      // }
  
    }
    componentWillReceiveProps(props) {
      const {history} = {...this.props}
      this.setState({cliente: props.cliente})
      this.setState({ cliente: props.cliente });
      this.setState({ clientes: props.listadoClientes });
    }

    estadoInicial(){
      this.setState({ cliente: {id:"",nombre: "",cuit: "",email:"" }});

    }

    componentWillMount() {
      return this.props.listadoClientes
    };


    cliente = () => {
      const clien =this.props.cliente;
      const { history } = clien
      if(history) history.push(clien);
     }

    changeHandler(event) {
        var nuevoCliente = Object.assign({}, this.state.cliente)
        nuevoCliente[event.target.name] = event.target.value
        this.setState({cliente: nuevoCliente});
        console.log("cambios handler",this.state.nuevoCliente)
}



   

    sendHandler(event) {
        fetch('http://localhost:3004/clientes', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
           body: JSON.stringify(this.state.cliente)
     
      })  
      .then(this.props.listadoClientes)
      .then(this.estadoInicial());

        event.preventDefault();
    }

 

    addHandler(event) {
      fetch('http://localhost:3004/clientes', {
          method: 'post',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
            body: JSON.stringify(this.state.cliente)
          })
          .then(res =>this.props.listadoClientes)
          .then(res => this.estadoInicial());
          event.preventDefault();
  }

     onSubmit(event){
      console.log("entre al handler",event)
      if(this.state.cliente.id){
       this.sendHandler(event)
      }else {
       this.addHandler(event)
    }
  }

  
  
 
 
 

    render() {
      
      
      return (
        <Form onSubmit={this.onSubmit}>  
          <FormGroup>
          <Label for="exampleName">nombre</Label>
          <Input type="text" name="nombre" id="exampleNombre" value={this.state.cliente.nombre} 
           onChange={this.changeHandler} placeholder="Leonor Marzec" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleCuit">Cuit</Label>
          <Input type="text" name="cuit" id="examplCuit" value={this.state.cliente.cuit}
          onChange={()=>this.changeHandler()} placeholder="27322224443" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" value={this.state.cliente.email}
          onChange={()=> this.changeHandler()} placeholder="leonor18@gmail.com" />
        </FormGroup>
       

        <FormText color="muted">AL PRESIONAR EL BOTON SIGUIENTE AGREGAS O ACTUALIZAS</FormText>
        <Button type="submit" outline color="success">Agregar/Actualizar</Button>

        
        </Form>
    )
  
    }


}

export default ClienteForm
