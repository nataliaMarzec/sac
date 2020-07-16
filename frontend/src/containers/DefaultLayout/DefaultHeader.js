import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavbarBrand } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
//import logo from '../../assets/img/brand/logo.svg'
//import sygnet from '../../assets/img/brand/sygnet.svg'
import afip from '../../assets/img/brand/afip.jpeg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    //lista de clientes abajo
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <NavbarBrand href="https://nataliamarzec.github.io/sac/" target='_blank'>Sac</NavbarBrand>

        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>

          <NavItem className="px-3">
            <NavLink to="/" className="nav-link" >Home</NavLink>
          </NavItem>

          <NavItem className="px-3">
            <Link to="/usuarios" className="nav-link">Usuarios</Link>
          </NavItem>

      
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>Empresa</DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link to="/empresas" key="#listadoEmpresa" className="nav-link">Listado</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/empresaForm" className="nav-link">Registrar</Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Detalles</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
      

         <NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>Clientes</DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link to="/clientes" key="#listado" className="nav-link">Listado</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/clienteForm2" className="nav-link">Registrar</Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Detalles</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          </NavItem>
           
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>Vouchers</DropdownToggle>
            <DropdownMenu left>
              <DropdownItem>
                <Link to="/facturas" key="#listado" className="nav-link">Listado</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/facturaForm" className="nav-link">Registrar</Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Detalles</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>


        <NavItem className="px-3">
          <NavbarBrand href="afip.gob.ar" target='_blank'>afip</NavbarBrand>
         </NavItem>
        </Nav>

        {/*Aca comienza el navbar de arriba(header)de la derecha*/}

        <Nav className="ml-auto" navbar>
          <AppNavbarBrand
            full={{ src: afip, width: 50, height: 40, alt: 'Afip Logo' }}
          />
          {/* minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}*/}

          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5 a ver--</Badge></NavLink>
          </NavItem>

          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-list"></i></NavLink>
          </NavItem>

          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-location-pin"></i></NavLink>
          </NavItem>

          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="natimarzec708@gmail.com" />
            </DropdownToggle>

            {/*aca comienza el menu del nav de arriba a la derecha costado*/}
            <DropdownMenu right>

              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>

              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>

              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>

              <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>

              <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
              <DropdownItem divider />

              <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>

              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>

            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
