import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

class ModificarUsuario extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = { usuario: props.usuario }
    }

    componentWillReceiveProps(props) {
        this.setState({ usuario: props.usuario })
    }

    handleChange(event) {
        var newUsuario = Object.assign({}, this.state.usuario);
        newUsuario[event.target.name] = event.target.value;
        this.setState({ usuario: newUsuario });
    }

    handleSubmit(event) {
        fetch('http://localhost:8008/usuarios', {
            method: 'put',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.usuario)
        }).then(res => this.props.usuarioChange(this.state.usuario))
            .catch(res => console.log("ERROR USUARIO"));

        event.preventDefault();
    }

    render() {
        return (

            <Form class="margen-superior">
                <FormGroup>
                    <Label for="nombre">nombre:</Label>
                    <Input type="text" name="nombre" size="50" id="nombre"
                        value={this.state.usuario.nombre} onChange={this.handleChange} />
                    <FormText></FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="cuit">cuit:</Label>
                    <Input type="number" name="cuit" size="11" id="cuit"
                        value={this.state.usuario.cuit} onChange={this.handleChange} />
                    <FormText></FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="dni">DNI:</Label>
                    <Input type="number" name="dni" size="8" id="dni"
                        value={this.state.usuario.dni} onChange={this.handleChange} />
                    <FormText></FormText>
                </FormGroup>
                
                <Button color="danger" onClick={this.handleSubmit}>
                    Modificar
          </Button>
            </Form>
        );
    }
}

export default ModificarUsuario