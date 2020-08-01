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
import ContactPerson from './ContactPerson';


class Contacts extends Component {
    deleteContact(id) {
        this.props.onDelete(id);
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
        {/*<Row>
                  <Col xs="12" md="6">
                  <Card>
                      <CardHeader>
                        <strong>New</strong> Contact
                      </CardHeader>
                      <CardBody>
                        <Form action="" method="post" className="form-horizontal">
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="hf-name">Name</Label>
                            </Col>
                            <Col xs="12" md="9">
                              <Input type="text" id="hf-name" name="hf-name" placeholder="Enter Name..."/>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="hf-mobile-number">Contact&nbsp;Number</Label>
                            </Col>
                            <Col xs="12" md="9">
                              <Input type="text" id="hf-mobile-number" name="hf-mobile-number" placeholder="Enter Contact Number..."/>
                            </Col>
                          </FormGroup>
                        </Form>
                      </CardBody>
                      <CardFooter>
                        <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                        <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                      </CardFooter>
                  </Card>
                  </Col>
                </Row>*/}

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
        );
    }
}

export default Contacts;
