import React from 'react';
import {Badge,Button,Card,CardBody,CardFooter,CardHeader,Col,Collapse,
DropdownItem,DropdownMenu,DropdownToggle,Fade,Form,FormGroup,FormText,
FormFeedback,Input,InputGroup,InputGroupAddon,InputGroupButtonDropdown,
InputGroupText,Label,Row,
} from 'reactstrap';
//const clientes=require('./../Clientes.js')

class ClienteForms1 extends React.Component {
  constructor(props) {
      super(props)
       this.state ={cliente: props.cliente}
      	//timeout: 300
      //};
      this.toggle = this.toggle.bind(this);
      this.toggleFade = this.toggleFade.bind(this);
      this.changeHandler = this.changeHandler.bind(this)
      this.estadoInicial=this.estadoInicial.bind(this)
      this.onSubmit=this.onSubmit.bind(this)
      
  }
  toggle() {
    this.state={collapse:true}
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.state={fadeIn:true}
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  estadoInicial(){
      this.setState({ cliente: {id:"", nombre: "",cuit: "",email:""} });
    }  
 
  componentWillReceiveProps(nextProps) {
      this.setState({cliente: nextProps.cliente})
    }

  // this.setState({email: event.currentTarget.value });    
  changeHandler(event) {
     var nuevoCliente = Object.assign({}, this.state.cliente)
     nuevoCliente[event.target.name] = event.target.value
     this.setState({cliente: nuevoCliente})}
      
   
   
     

    sendHandler(event) {
        fetch('http://localhost:3001/clientes', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            
        }).then(res => this.props.clienteChanged(this.state.cliente) )
          .then(res => this.estadoInicial())

        event.preventDefault();
    }
    addHandler(event) {
      fetch('http://localhost:3001/clientes', {
          method: 'post',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
            body: JSON.stringify(this.state.cliente)
          })
           //ver listadoClientes():
          .then(res =>this.props.listadoClientes())
          .then(res => this.estadoInicial() );
          event.preventDefault();
  }

     onSubmit(event){
      if(this.state.cliente.id){
       this.sendHandler(event)
      //alert(´${this.state.cliente.id}´)
      }else {
       this.addHandler(event)
    }
  }


  render() {
   //const {nombre,email,cuit}=this.state
   
    return (
      {/*<div className="animated fadeIn">
     <Form onSubmit={this.onSubmit}>  
          <FormGroup>
          <Label for="exampleName">Nombre</Label>
          <Input type="text" name="nombre" id="exampleNombre" value={this.props.agregar(this.state.cliente.nombre)} 
           onChange={this.changeHandler} placeholder="Leonoras Marzec" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleCuit">Cuit</Label>
          <Input type="text" name="cuit" id="examplCuit" value={this.state.cliente.cuit}
          onChange={this.changeHandler} placeholder="27322224443" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" value={this.state.cliente.email}
          onChange={this.changeHandler} placeholder="leonormarzec708@gmail.com" />
        </FormGroup>
       

        <FormText color="muted">AL PRESIONAR EL BOTON SIGUIENTE AGREGAS O ACTUALIZAS</FormText>
        <Button type="submit" outline color="success">Agregar/Actualizar</Button>

        
        </Form>
      </div>*/}
    )
  
    }


}
  export default ClienteForms1








       
