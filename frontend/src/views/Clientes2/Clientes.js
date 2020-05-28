import React,{Component} from 'react';
// import { Ellipsis} from 'react-awesome-spinners'


class Clientes extends Component {
  constructor(props) {
    super(props);
    this.state= { clientes: []}
  }

    actualizarListaClientes() {
    fetch(`http://localhost:3001/clientes`)
      .then( res => res.json())
      .then( cl => this.setState({clientes: cl}));
  }

    

    render() {
      // const [loading, setLoading] = useState(true);
    
      if( this.state.clientes.length === 0 ) {
        return(
          <div className="clientesCSS">
              <h2>{this.props.titulo}</h2>
          
          <table className="table">
            <thead>
              <tr>
                 <th>id</th>
                 <th>nombre</th>
                 <th>email</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </div>)
      }
      else {
        return(
          <div className="clienteCSS">
              <h2>{this.props.titulo}</h2>
              CARGANDO
              {/* {this.state.loading(true)}&& <Ellipsis/>} */}

            
          </div>);  
      }

    }

    renderRows() {
      return this.state.clientes.map((unCliente, index) => {
        return (
          <tr key={unCliente._id}>
            <td>{unCliente._id}</td> 
            <td>{unCliente.nombre}</td>
          </tr>
        );
      })
    }
  
  }
  export default Clientes
