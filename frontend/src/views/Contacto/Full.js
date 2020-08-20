import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {
  Container,
  Badge,
  Row,
  Col,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  FormGroup,
  FormText,
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  Table
} from 'reactstrap';
import Header from '../../Components/Header/';
import Sidebar from '../../Components/Sidebar/';
import Breadcrumb from '../../Components/Breadcrumb/';
import Aside from '../../Components/Aside/';
import Footer from '../../Components/Footer/';
import toastr from 'toastr';

import Dashboard from '../../views/Dashboard/Dashboard';

import Contacts from '../../Components/Contacts';
import AddContact from '../../Components/AddContact';
import EditContact from '../../Components/EditContact';

class Full extends Component {
  constructor() {
  super();
  this.state = {
    contacts: (typeof localStorage["contacts"] !== "undefined") ? JSON.parse(localStorage.getItem('contacts')) : [
      {id:1, profile: "default.png", name: "Mark Andrey Dela Cruz", number: "09269566991", email: "markandreydelacruz@ymail.com", address: "SHV, Muntinlupa City"},
      {id:2, profile: "default.png", name: "Jan Cruz", number: "09269566991", email: "markandreydelacruz@ymail.com", address: "SHV, Muntinlupa City"},
      {id:2, profile: "default.png", name: "April Cruz", number: "09269566991", email: "markandreydelacruz@ymail.com", address: "SHV, Muntinlupa City"},
      {id:4, profile: "default.png", name: "Peter Parker", number: "09269566991", email: "markandreydelacruz@ymail.com", address: "SHV, Muntinlupa City"}
    ],
    modal: false
  }
    this.handleAddContact =  this.handleAddContact.bind(this);
    this.handleDeleteContact =  this.handleDeleteContact.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleAddContact(contact) {
    let contacts = this.state.contacts;
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    this.setState({contacts:contacts});
    alert('New Contact Added!');
  }

  handleDeleteContact(id) {
    let contacts = this.state.contacts;
    let index = contacts.findIndex( x => x.id === id);
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    this.setState({contacts:contacts});
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Row>&nbsp;</Row>
            <Container fluid>
            
              {/*<EditContact addContact={ this.handleAddContact }/>*/}
              <Button color="success" onClick={this.toggle}>New Contact</Button>

              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}><strong>New</strong> Contact</ModalHeader>
                
                  <AddContact addContact={ this.handleAddContact }/>
                
                
              </Modal>
            
              <Row>&nbsp;</Row>
              <Contacts onDelete={ this.handleDeleteContact } contacts = { this.state.contacts }/>
            </Container>
          </main>
          <Aside />
        </div>
          <Footer />
      </div>
    );
  }
}

export default Full;

