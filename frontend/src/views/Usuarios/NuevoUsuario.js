import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';


class NuevoUsuario extends React.Component {
  

  constructor(props) {
      super(props);
      this.state = {usuario:props.usuario,modal:props.modal};
      // this.state={
      //            usuario:{
      //              id:"",nombre:"",cuit:"",email:""}}
      // this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.onSubmit=this.onSubmit.bind(this);
      // this.estadoInicial=this.estadoInicial.bind(this)
      
    }

    
    // estadoInicial(){
    //   this.setState({usuario: {id:"",nombre: "",cuit: "",email:"" }});

    // }

    componentWillReceiveProps(props) {
      this.setState({usuario: props.usuario});
      this.setState({usuarios: props.usuarios});
    }

    onSubmit=event=>{
      this.insertar();
      event.preventDefault()
     //  this.props.cerrarModal()
   }
 

    handleChange=e=>{
      e.persist();
      this.setState({
        usuario:{...this.state.usuario,
        [e.target.name]:e.target.value}
      })
      console.log(this.state.usuario)
    }

    // handleSubmit(event) {
    //   fetch('http://localhost:8008/usuarios', {
    //       method: 'put',
    //       headers: {
    //           'Accept': 'application/json, text/plain, */*',
    //           'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(this.state.usuario)
    //   }).then(res => this.props.usuarioChange(this.state.usuario))
    //     .catch(res => console.log("ERROR-no actualiza") );

    //   event.preventDefault();
    // }

    // insertar=()=>{
    //   valorNuevo.id=this.getPeticiones().length+1
    //   var lista= this.getPeticiones();
    //   lista.push(valorNuevo)
    // }
    
    insertar(event) {
      var valorNuevo={...this.state.usuario}
        fetch(`http://localhost:8008/usuarios`, {
          usuar:console.log(valorNuevo),
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.state.usuario),
        })
        .then(res => res.json())
        .then(res => this.props.actualizarModal())
        .catch(err => console.log("Error:",err));
       event.preventDefault();   
    };


  //   addHandler(event) {
  //     fetch('http://localhost:3004/clientes', {
  //         method: 'post',
  //         headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json'
  //         },
  //           body: JSON.stringify(this.state.cliente)
  //         })
  //         .then(res =>this.props.listadoClientes)
  //         .then(res => this.estadoInicial());
  //         event.preventDefault();
  // }
  
    // editarcliente = () => {
    //   fetch("http://localhost:8888/clientes", {
    //     method: "PUT",
    //     body: JSON.stringify(this.state.cliente),
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json"
    //     }
    //   })
    //     .then(this.props.listadoDeClientes)
    //     .then(this.estadoInicial());
    // };
  
  
  

    



render() {

  return (
    <Form onSubmit={this.onSubmit} >  
      <FormGroup>
      <Label for="exampleName">Nombre</Label>
      <Input type="text" name="nombre" id="nombre" value={this.state.usuario.nombre} 
       onChange={this.handleChange} placeholder="ej.Lucía Adamkzick" />
    </FormGroup>
    <FormGroup>
      <Label for="examplecuit">cuit</Label>
      <Input type="text" name="cuit" id="cuit" value={this.state.usuario.cuit}
      onChange={this.handleChange} placeholder="30222888" />
    </FormGroup>
    <FormGroup >
      <Label for="email"> email</Label>
      <input type="text" name="email" id="email" value={this.state.usuario.email}
      onChange={this.handleChange}></input>
    </FormGroup>
    {/* <Button type="<submit></submit>" color="success" onClick={ this.handleSubmit.bind(this) }><i className="fa fa-dot-circle-o"></i> Submit</Button> */}
    {/* <Button type="submit" outline color="success"><i className="fa fa-dot-circle-o"></i>Agregar usuario</Button>   */}
    <Button type="submit" outline color="success"><i className="fa fa-dot-circle-o"></i>Agregar usuario</Button>  

    </Form>
)

  }


}
export default NuevoUsuario