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
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  Table
} from 'reactstrap';

class ContactPerson extends Component {
    deleteContact(id) {
        this.props.onDelete(id);
    };

    render() {

        return (

            <tr className="ContactPerson">
                <td>{ this.props.contact.name }</td>
                <td>{ this.props.contact.number }</td>
                <td>
                    <Button color="primary" size="sm">Edit</Button>{' '}
                    <Button color="danger" size="sm" onClick={ this.deleteContact.bind(this, this.props.contact.id) }><i className="fa fa-ban"></i> Delete</Button>{' '}
                </td>
            </tr>
        );
    }
}

export default ContactPerson;
