import React from 'react';
import { Table } from 'reactstrap';
import ModificarUsuario from './ModificarUsuario.js'
import UsuarioRow from './UsuarioRow.js'
import NuevoUsuario from './NuevoUsuario.js'


class Usuarios extends React.Component {
    constructor(props) {
        super(props);
        this.state = { usuarios: [], selected: {} }
        this.select = this.select.bind(this);
        this.usuarioChange = this.usuarioChange.bind(this);
        this.usuarioDelete = this.usuarioDelete.bind(this);
    }

    componentWillMount() {
        fetch(`http://localhost:8008/usuarios`)
            .then(res => res.json())
            .then(us => this.setState({ usuarios: us }));
    }

    render() {
        return (
            <div class="ancho-table">
                <div>
                    <NuevoUsuario usuario={this.state.selected} usuarioChange={this.usuarioChange} />
                    <br></br>
                </div>
                <Table hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Rol</th>
                            <th>Nombre</th>
                            <th>Cuit</th>
                            <th>DNI</th>
                           
                        </tr>
                    </thead>
                    <tbody class="cursor">
                        {this.renderRows()}
                    </tbody>
                </Table>
            </div>
        );
    }

    renderRows() {
        return this.state.usuarios.map(unUsuario=> {
            return (
                <UsuarioRow usuario={unUsuario} delete={this.usuarioDelete} selector={this.select} />
            );
        })
    }

    select(unUsuario) {
        this.setState({ selected: unUsuario })
    }

    usuarioChange(unUsuario) {
        var nuevaListaUsuarios = this.state.usuarios.map((item) => (unUsuario._id != item._id) ? item : unUsuario)
        this.setState({usuarios: nuevaListaUsuarios, selected: {} })
    }

    usuarioDelete(unUsuario) {
        var usuarios = this.state.usuarios.filter(item => item._id !== unUsuario._id);
        this.setState({usuarios });
    }

}

export default Usuarios;