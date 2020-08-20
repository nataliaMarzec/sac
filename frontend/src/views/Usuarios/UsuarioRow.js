import React from 'react';
import { Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class UsuarioRow extends React.Component {

    constructor(props) {
        super(props);
        this.selectUsuario = this.selectUsuario.bind(this);
        this.state = { modal: false };
        this.toggle = this.toggle.bind(this);
    }

    selectUsuario() {
        this.props.selector(this.props.usuario)
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <tr key={this.props.usuario._id} onClick={this.selectUsuario}>
                <td>
                    <Button color="danger" close onClick={this.toggle}/>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Eliminar</ModalHeader>
                        <ModalBody>
                            ¿Eliminar el huesped seleccionado {this.props.usuario.nombre}?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={() => this.eliminarUsuario(this.props.usuario._id)}>Eliminar</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>
                </td>
                <td>{this.props.usuario.nombre}</td>
                <td>{this.props.usuario.telefono}</td>
                <td>{this.props.usuario.dni}</td>
            </tr>
        );

    }

    eliminarUsuario(idUsuario) {
        this.toggle();
        fetch(`http://localhost:8008/usuarios/${idUsuario}`, {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => this.props.delete(this.props.usuario))
    }
}

export default UsuarioRow