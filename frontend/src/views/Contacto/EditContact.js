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

class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            number: '', 
        }

        this.handleName = this.handleName.bind(this);
        this.handleNumber = this.handleNumber.bind(this);
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

    handleSubmit(e) {
        const newContact = {
            id: this.state.id,
            name: this.state.name,
            number: this.state.number
        }
        
        this.props.addContact(newContact);
        this.setState({
            name: '',
            number: '',
        });

        e.preventDefault();

    }

    render() {

    return (
          <Col xs="6" md="6">
          <Card>
              <CardHeader>
                <strong>Edit</strong> Contact
              </CardHeader>
              <CardBody>
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-name">Edit Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="hf-name" name="hf-name" placeholder="" required value={ this.state.name } onChange={ this.handleName }/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-mobile-number">Edit&nbsp;Contact Number</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="hf-mobile-number" name="hf-mobile-number" placeholder="" required value={ this.state.number } onChange={ this.handleNumber }/>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary" onClick={ this.handleSubmit.bind(this) }><i className="fa fa-dot-circle-o"></i> Submit</Button>
              </CardFooter>
          </Card>
          </Col>
    );
  }
}

export default EditContact;