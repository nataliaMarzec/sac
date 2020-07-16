import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class FacturaForm extends React.Component {
  
    constructor(props) {
      super(props)
      this.state={factura:props.factura}
      this.changeHandler = this.changeHandler.bind(this)
      this.estadoInicial=this.estadoInicial.bind(this)
      this.onSubmit=this.onSubmit.bind(this)
       
}

    estadoInicial(){
      this.setState({factura: { nombre: "", dni: "", estado:"no"} });

    }
    componentWillReceiveProps(props) {
      this.setState({factura: props.factura})
    }

    changeHandler(event) {
        var nuevaFactura = Object.assign({}, this.state.factura)
        nuevaFactura[event.target.name] = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({factura: nuevaFactura})
    }

    sendHandler(event) {
        fetch('http://localhost:3004/vouchers', {
            method: 'put',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.factura)
        }).then(res => this.props.facturaChanged(this.state.factura) )
          .then(res=>this.estadoInicial)
           event.preventDefault();
    }


    addHandler(event) {
      fetch('http://localhost:3004/vouchers', {
          method: 'post',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
            body: JSON.stringify(this.state.factura)
          })
          .then(res =>this.props.listadoFactura() )
          .then(res => this.estadoInicial() );
           event.preventDefault();
  }
  onSubmit(event){
    if(this.state.factura.id){
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
      <Input type="text" name="nombre" id="exampleNombre" value={this.state.factura.nombre} 
       onChange={this.changeHandler} placeholder="ej.Diego Adamkzick" />
    </FormGroup>
    <FormGroup>
      <Label for="exampledni">DNI</Label>
      <Input type="text" name="dni" id="exampleDni" value={this.state.factura.dni}
      onChange={this.changeHandler} placeholder="30222888" />
    </FormGroup>
    <FormGroup >
      <Label for="estado"> estado  </Label>
      <input type="checkbox" name="estado" checked={this.state.factura.estado}
      onChange={this.changeHandler}></input>
    </FormGroup>
  
    <Button type="submit" outline color="success">Agregar/Actualizar</Button>  
    </Form>
)

}


}
export default FacturaForm
