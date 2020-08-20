import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class ChoferForm extends React.Component {
  
    constructor(props) {
      super(props)
      this.state={chofer:props.chofer}
      this.changeHandler = this.changeHandler.bind(this)
      this.estadoInicial=this.estadoInicial.bind(this)
      this.onSubmit=this.onSubmit.bind(this)
       
}

    estadoInicial(){
      this.setState({ chofer: { nombre: "", dni: ""} });
      // this.setState({ chofer: { nombre: "", dni: ""} });
    }
    componentWillReceiveProps(props) {
      this.setState({chofer: props.chofer})
    }

    changeHandler(event) {
        var nuevoChofer = Object.assign({}, this.state.chofer)
        nuevoChofer[event.target.name] = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({chofer: nuevoChofer})
    }

    sendHandler(event) {
        fetch('http://localhost:8008/choferes', {
            method: 'put',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.chofer)
        }).then(res => this.props.choferChanged(this.state.chofer) )
          .then(res=>this.estadoInicial)
           event.preventDefault();
    }


    addHandler(event) {
      fetch('http://localhost:8008/choferes', {
          method: 'post',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
            body: JSON.stringify(this.state.chofer)
          })
          .then(res =>this.props.listadoChoferes() )
          .then(res => this.estadoInicial() );
           event.preventDefault();
  }
  onSubmit(event){
    if(this.state.chofer.id){
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
      <Input type="text" name="nombre" id="exampleNombre" value={this.state.chofer.nombre} 
       onChange={this.changeHandler} placeholder="ej.Diego Adamkzick" />
    </FormGroup>
    <FormGroup>
      <Label for="exampledni">DNI</Label>
      <Input type="text" name="dni" id="exampleDni" value={this.state.chofer.dni}
      onChange={this.changeHandler} placeholder="30222888" />
    </FormGroup>
    {/* <FormGroup >
      <Label for="enViaje"> Viajando  </Label>
      <input type="checkbox" name="enViaje" checked={this.state.chofer.enViaje}
      onChange={this.changeHandler}></input>
    </FormGroup>
   */}
    <Button type="submit" outline color="success">Agregar/Actualizar</Button>  
    </Form>
)

}


}
export default ChoferForm