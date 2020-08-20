import React from 'react';
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class NuevoUsuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",cuit:"", dni: "",
            email:"", modal: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.cargarUsuario = this.cargarUsuario.bind(this);
    }

    // componentWillMount() {
    //     fetch(`http://localhost:8008/saludar`)
    //         .then(res => res.json())
    //         .then(mensaje => this.setState({ mensaje }));
    // }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const formulario =
            <Form className="margen-superior" onSubmit={this.cargarCliente}>
                <FormGroup>
                    <Label for="nombre">Ingrese su nombre:</Label>
                    <Input type="text" name="nombre" size="50" id="nombre"
                        value={this.state.nombre} onChange={this.handleInputChange} required />
                    <FormText></FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="cuit">Número de DNI:</Label>
                    <Input type="number" name="cuit" size="8" id="cuit"
                        value={this.state.cuit} onChange={this.handleInputChange}/>
                    <FormText></FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="dni">Número de DNI:</Label>
                    <Input type="number" name="dni" size="8" id="dni"
                        value={this.state.dni} onChange={this.handleInputChange}/>
                    <FormText></FormText>
                </FormGroup>
                
                <Button type="submit" color="danger">Registrar</Button>
                <Modal isOpen={this.state.modal} className={this.props.className}>
                    <ModalHeader>Registración</ModalHeader>
                    <ModalBody>
                        El registro se ha hecho exitosamente
                    </ModalBody>
                </Modal>
            </Form>
        return (
            <div class="ancho-form">
                <br></br>
                {formulario}
            </div>
        );
    }

    cargarUsuario(event) {
        var usuario = {
            nombre: this.state.nombre,
            cuit:this.state.cuit,
            dni: this.state.dni
        }
        console.log(JSON.stringify(usuario))
        fetch(`http://localhost:8008/usuarios`, {
            method: 'POST', 
            body: JSON.stringify(usuario), 
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => this.setState(prevState => ({
                modal: !prevState.modal
            })))
        event.preventDefault();
    }

}

export default NuevoUsuario;