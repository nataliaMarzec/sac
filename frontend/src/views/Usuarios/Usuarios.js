import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup,Label,Table,Row,Col,Card,CardHeader,CardBody} from 'reactstrap';
import UsuarioRow from './UsuarioRow'
import NuevoUsuario from './NuevoUsuario';

const url=`http://localhost:8008/usuarios`;
class Usuarios extends React.Component{
    constructor(props){
      super(props)
      this.state= {usuarios:[] ,selected:{},abierto:false};
      this.select = this.select.bind(this);
      this.usuarioChange = this.usuarioChange.bind(this);
      this.actualizarLista=this.actualizarLista.bind(this);
      this.actualizarModal=this.actualizarModal.bind(this)
    }

    // this.listadoChoferes=this.listadoChoferes.bind(this)
    // this.updateLista=this.updateLista.bind(this)
  
    actualizarModal(){
      this.setState({abierto:!this.state.abierto});
    }
    

    getPeticiones(){
      fetch(url).then(res => res.json())
      .then( usuarios => this.setState({usuarios:usuarios}))
      .catch(error=>(console.log(error)))
    }
    
    componentDidMount=()=>{
      this.getPeticiones();
    }
    


   
    render(){
  
      const modalStyles={
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
      // if( this.state.usuarios.length >= 0 ) {
      return(
        <>
        <div className="principal">
          <div className="secundario">
        <div>
        <Button color="success" onClick={this.actualizarModal}>Mostrar Modal(ir al formulario)</Button>
        </div>
        {/* aca el row (lista de usuarios) */}
       <div>
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>Usuarios
              </CardHeader>
              <CardBody>
                <Table responsive bordered size="sm">
                  <thead>
                  <tr>
                    <th><i class="icon-people"></i></th>
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
              </CardBody>
            </Card>
          </Col>
        </Row>
        
      </div>
      
     {/* aca termina el formulario */}

  
        </div>&nbsp;</div>
  
        <Modal isOpen={this.state.abierto} style={modalStyles}>
        {/* cuando abro el modal apararece el iniciar sesion */}
          <ModalHeader>
            Iniciar Sesión
          </ModalHeader>
          <ModalBody>
           {/* aca llamo al formulario dentro del modal */}
           <NuevoUsuario usuario={this.state.selected}
                         usuarios={this.usuarios}
                         usuarioChange={this.usuarioChange} 
                         actualizarModal={this.actualizarModal}
            
                         />
 




{/*           
            <FormGroup>
              <Label for="usuario">Usuario</Label>
              <Input type="text" id="usuario"/> 
            </FormGroup>
            <FormGroup>
              <Label for="password">Contraseña</Label>
              <Input type="text" id="password"/> 
            </FormGroup> */}
          </ModalBody>
  
          <ModalFooter>
              <Button color="primary">Iniciar Sesión</Button>
              <Button color="secondary" onClick={this.actualizarModal}>Cerrar</Button>
          </ModalFooter>
        </Modal>
        </>
      )
          // } <- es del if
    }

    renderRows() {
        return this.state.usuarios.map((unUsuario, index) => {
          return (
            <UsuarioRow usuario={unUsuario} 
                        selector={this.select} 
                        actualizarLista={this.actualizarLista}
                        
            />
          );
        })
      }


    select(unUsuario) {
      this.setState({selected:unUsuario})
    }
  
    usuarioChange(unUsuario) {
        var nuevaLista = this.state.usuarios.map((item) => (unUsuario.id !== item.id) ? item : unUsuario )
        this.setState({usuarios:nuevaLista, selected:unUsuario})
      }
  
    actualizarLista(unUsuario) {
        var listaActualizada= this.state.usuarios.filter(
       item => unUsuario.id !== item.id 
   
        );
        this.setState({ usuarios:listaActualizada });
   
     }
       

  



  }
  
  export default Usuarios;
  
