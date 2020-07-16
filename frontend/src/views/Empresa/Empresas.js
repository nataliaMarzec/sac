import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import EmpresaForm from './EmpresaForm'
import EmpresaRow from './EmpresaRow'
import empresasData from './EmpresasData'

// function EmpresaRow(props) {
//   const empresa = props.user
//   const empresaLink = `/empresas/${empresa.id}`
//   return (
//     <tr key={empresa.id.toString()}>
//       <th scope="row"><Link to={empresaLink}>{empresa.id}</Link></th>
//       <td><Link to={empresaLink}>{empresa.nombre}</Link></td>
//       <td>{empresa.cuit}</td>
//       <td>{empresa.email}</td>
      
//     </tr>
//   )
// }

class Empresas extends Component {
  constructor(props) {
    super(props);
    this.state= {empresas: [], seleccionado:{}}
    this.selectEmpresa = this.selectEmpresa.bind(this)
    this.empresaChangeHandler = this.empresaChangeHandler.bind(this)
    this.listadoEmpresa=this.listadoEmpresa.bind(this)
    this.updateLista=this.updateLista.bind(this)
    
  }


  componentWillMount() {
    this.listadoEmpresa();
  }

  estadoInicial(){
    this.setState({ cliente: {id:"", nombre: "",cuit: "",email:"" }});
  }

  listadoEmpresa(){
    fetch(`http://localhost:3004/empresas`)
      .then( res => res.json())
      .then( emprs=> this.setState({empresas:emprs}));
    
}

updateLista(unaEmpresa) {
 var updateEmpresa= this.state.empresas.filter(
item => unaEmpresa._id !== item._id 

 );
 this.setState({empresas: updateEmpresa });

}


selectEmpresa(unaEmpresa) {
this.setState({seleccionado: unaEmpresa})
}

empresaChangeHandler(unaEmpresa) {
var nuevaLista = this.state.empresas.map( (item) =>  (item._id !== unaEmpresa._id) ?  item : unaEmpresa  )
this.setState({empresas: nuevaLista, seleccionado: unaEmpresa})
}



render() {
 
        
  return(

    <div className="container">
    <EmpresaForm empresa={this.state.seleccionado}
     empresaChanged={this.empresaChangeHandler}
     listadoEmpresa={this.listadoEmpresa}
     updateLista={this.updateLista}
    />
   
    <div className="empresasCSS">
        <h2>{this.props.titulo}</h2>
    
    <Table className="table" hover>
      <thead>
        <tr>
           <th>id</th>
           <th>nombre</th>
           <th>cuit</th>
           <th>email</th>
        </tr>
      </thead>
      <tbody>
        {this.renderRows()}
      </tbody>
    </Table>

    </div>
  </div>)


}

  renderRows() {
    return this.state.empresas.map((unaEmpresa, index) => {
      return (
        <EmpresaRow empresa={unaEmpresa}
          selector={this.selectEmpresa}
          updateLista={this.updateLista} 
          empresaChangedHandler={this.empresaChangeHandler}

        />
      );
    })
  }


}

export default Empresas;
