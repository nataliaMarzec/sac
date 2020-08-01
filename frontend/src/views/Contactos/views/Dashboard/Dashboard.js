import React, { Component } from 'react';
import {
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
import ContactPerson from '../Contacts/ContactPerson';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    let contactList;
        if (this.props.contacts) {
            contactList = this.props.contacts.map(contact => {
                return (
                    <ContactPerson onDelete={ this.deleteContact.bind(this) } key={ contact.id } contact={ contact } />
                );
            });
        }

    return (
      <div className="animated fadeIn">
        <Button onClick={this.toggle}>Launch demo modal</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Contact List
              </CardHeader>
              <CardBody>
                <Table responsive bordered table-condesed>
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Mobile Number</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  { contactList }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
      </div>

    )
  }
}

export default Dashboard;
