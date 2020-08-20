import React, { Component } from 'react';
import toastr from 'toastr';
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
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  Table
} from 'reactstrap';
import ContactPerson from './ContactPerson';


class Contacts extends Component {
    deleteContact(id) {
        this.props.onDelete(id);
    };

    render() {
      // devuelve una nueva lista contactos sin el contacto borrado
        let contactList;
        // donde esta el prop.contacts??
        if (this.props.contacts) {
            contactList = this.props.contacts.map(contact => {
                return (
                    <ContactPerson onDelete={ this.deleteContact.bind(this) } key={ contact.id } contact={ contact } />
                );
            });
        }

        return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Contact List
              </CardHeader>
              <CardBody>
                <Table responsive bordered size="sm">
                  <thead>
                  <tr>
                    <th><i class="icon-people"></i></th>
                    <th>Name</th>
                    <th>Mobile Number</th>
                    <th>Email</th>
                    <th>Home</th>
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
        );
    }
}

export default Contacts;
