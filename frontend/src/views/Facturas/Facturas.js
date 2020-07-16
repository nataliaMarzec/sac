import React from 'react';
import FacturaRow from './FacturaRow'
import FacturaForm from './FacturaForm'
import {Table} from 'reactstrap';

class Facturas extends React.Component {
  constructor(props) {
    super(props);
    this.state= { facturas: [], seleccionado:{}}
    this.selectFactura = this.selectFactura.bind(this)
    this.facturaChangeHandler = this.facturaChangeHandler.bind(this)
    this.listadoFactura=this.listadoFactura.bind(this)
    this.updateLista=this.updateLista.bind(this)
    
  }


  componentWillMount() {
    fetch(`http://localhost:3004/vouchers`)
      .then( res => res.json())
      .then( vouchs => this.setState({facturas: vouchs}));
  }

    render() {
 
        
        return(

          <div className="container">
          <FacturaForm factura={this.state.seleccionado}
           facturaChanged={this.facturaChangeHandler}
           listadoFactura={this.listadoFactura}
           updateLista={this.updateLista}
          />
         
          <div className="facturasCSS">
              <h2>{this.props.titulo}</h2>
          
          <Table className="table" hover>
            <thead>
              <tr>
                 <th>id</th>
                 <th>nombre</th>
                 <th>dni</th>
                 <th>estado</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </Table>
     
          </div>
        </div>)


    }
    listadoFactura(){
      this.componentWillMount()
    }

    updateLista(unVoucher) {
     var updateFactura= this.state.facturas.filter(
    item => unVoucher._id !== item._id 

     );
     this.setState({ facturas: updateFactura });

  }
    

  selectFactura(unVoucher) {
    this.setState({seleccionado: unVoucher})
  }

  facturaChangeHandler(unVoucher) {
    var nuevaLista = this.state.facturas.map( (item) =>  (item._id !== unVoucher._id) ?  item : unVoucher  )
    this.setState({facturas: nuevaLista, seleccionado: unVoucher})
  }

    renderRows() {
      return this.state.facturas.map((unVoucher, index) => {
        return (
          <FacturaRow factura={unVoucher}
            selector={this.selectFactura}
            updateLista={this.updateLista} 
            facturaChangedHandler={this.facturaChangeHandler}

          />
        );
      })
    }
  
  }



  export default Facturas
