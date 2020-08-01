import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class EmpresaForm extends React.Component {
  
    constructor(props) {
      super(props)
      this.state={empresa:props.empresa}
      this.changeHandler = this.changeHandler.bind(this)
      this.estadoInicial=this.estadoInicial.bind(this)
      this.onSubmit=this.onSubmit.bind(this)
       
}

    estadoInicial(){
      this.setState({empresa: { nombre: "", cuit:"", email:""} });

    }
    componentWillReceiveProps(props) {
      this.setState({empresa: props.empresa})
    }

    changeHandler(event) {
        var nuevaEmpresa = Object.assign({}, this.state.empresa)
        nuevaEmpresa[event.target.name] = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({empresa: nuevaEmpresa})
    }

    sendHandler(event) {
        fetch('http://localhost:3004/empresas', {
            method: 'put',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.empresa)
        }).then(res => this.props.empresaChanged(this.state.empresa) )
          .then(res=>this.estadoInicial)
           event.preventDefault();
    }


    addHandler(event) {
      fetch('http://localhost:3004/empresas', {
          method: 'post',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
            body: JSON.stringify(this.state.empresa)
          })
          .then(res =>this.props.listadoEmpresa() )
          .then(res => this.estadoInicial() );
           event.preventDefault();
  }
  onSubmit(event){
    if(this.state.empresa.id){
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
      <Label for="exampleName">Nombre</Label>
      <Input type="text" name="nombre" id="exampleNombre" value={this.state.empresa.nombre} 
       onChange={this.changeHandler} placeholder="ej.Diego Adamkzick" />
    </FormGroup>
    <FormGroup>
      <Label for="examplecuit">cuit</Label>
      <Input type="text" name="cuit" id="examplecuit" value={this.state.empresa.cuit}
      onChange={this.changeHandler} placeholder="30222888" />
    </FormGroup>
    <FormGroup >
      <Label for="email"> estado  </Label>
      <input type="text" name="email" checked={this.state.empresa.email}
      onChange={this.changeHandler}></input>
    </FormGroup>
  
    <Button type="submit" outline color="success">Agregar/Actualizar</Button>  
    </Form>
)

}


}
export default EmpresaForm