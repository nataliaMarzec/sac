import React, { Component } from 'react';
import uuid from 'uuid';
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

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            number: '',
            email: '',
            address: '',
            modal: false 
        }

        this.handleName = this.handleName.bind(this);
        this.handleNumber = this.handleNumber.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
    }

    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }

    handleName(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleNumber(e) {
        this.setState({
            number: e.target.value
        });
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    handleAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    handleSubmit(e) {
        const newContact = {
            id: this.state.id,
            name: this.state.name,
            number: this.state.number,
            email: this.state.email,
            address: this.state.address
        }
        
        this.props.addContact(newContact);
        this.setState({
            name: '',
            number: '',
            email: '',
            address: ''
        });

        e.preventDefault();

    }

    render() {

    return (
          <Col xs="12" md="12">
                <ModalBody>
              
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-name">Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="hf-name" name="hf-name" placeholder="Enter Name..." required value={ this.state.name } onChange={ this.handleName }/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-mobile-number">Contact&nbsp;Number</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="hf-mobile-number" name="hf-mobile-number" placeholder="Enter Contact Number..." required={ true } value={ this.state.number } onChange={ this.handleNumber }/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-email">Email</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="hf-email" name="hf-email" placeholder="Enter Email..." required={ true } value={ this.state.email } onChange={ this.handleEmail }/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-address">Home&nbsp;Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="hf-address" name="hf-address" placeholder="Enter Address..." required={ true } value={ this.state.address } onChange={ this.handleAddress }/>
                    </Col>
                  </FormGroup>
                </Form>

                </ModalBody>

                <ModalFooter>
                  <Button type="<submit></submit>" color="success" onClick={ this.handleSubmit.bind(this) }><i className="fa fa-dot-circle-o"></i> Submit</Button>
                </ModalFooter>
              
              
              
          
          </Col>
    );
  }
}

export default AddContact;
