import React from 'react';
import ChoferRow from './ChoferRow'
import ChoferForm from './ChoferForm'
import {Table} from 'reactstrap';

class Choferes extends React.Component {
  constructor(props) {
    super(props);
    this.state= { choferes: [], seleccionado:{}}
    this.selectChofer = this.selectChofer.bind(this)
    this.choferChangeHandler = this.choferChangeHandler.bind(this)
    this.listadoChoferes=this.listadoChoferes.bind(this)
    this.updateLista=this.updateLista.bind(this)
    
  }


  componentWillMount() {
    fetch(`http://localhost:8008/choferes`)
      .then( res => res.json())
      .then( chfs => this.setState({choferes: chfs}));
  }

    render() {
 
        
        return(

          <div className="container">
          <ChoferForm chofer={this.state.seleccionado}
           choferChanged={this.choferChangeHandler}
           listadoChoferes={this.listadoChoferes}
           updateLista={this.updateLista}
          />
         
          <div className="choferesCSS">
              <h2>{this.props.titulo}</h2>
          
          <Table className="table" hover>
            <thead>
              <tr>
                 <th>id</th>
                 <th>nombre</th>
                 <th>dni</th>
                 <th>viajando</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </Table>
     
          </div>
        </div>)


    }
    listadoChoferes(){
      this.componentWillMount()
    }

    updateLista(unChofer) {
     var updateChofer= this.state.choferes.filter(
    item => unChofer.id !== item.id 

     );
     this.setState({ choferes: updateChofer });

  }
    

  selectChofer(unChofer) {
    this.setState({seleccionado: unChofer})
  }

  choferChangeHandler(unChofer) {
    var nuevaLista = this.state.choferes.map( (item) =>  (item.id !== unChofer.id) ?  item : unChofer   )
    this.setState({choferes: nuevaLista, seleccionado: unChofer})
  }

    renderRows() {
      return this.state.choferes.map((unChofer, index) => {
        return (
          <ChoferRow chofer={unChofer}
            selector={this.selectChofer}
            updateLista={this.updateLista} 
            choferChangedHandler={this.choferChangeHandler}

          />
        );
      })
    }
  
  }



  export default Choferes