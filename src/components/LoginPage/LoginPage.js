import React from 'react'
import classes from './LoginPage.scss'
import {Panel, Tabs, Tab, Form, FormGroup, FormControl, Col, Button,} from 'react-bootstrap'
import {reduxForm} from 'redux-form';

export const LoginPage = (props) => (
  <div>
    <Panel>
      <Tabs defaultActiveKey={1} id="login-register-tabs">
        <Tab eventKey={1} title="Log In"><LoginForm/></Tab>
        <Tab eventKey={2} title="Register">Register</Tab>
      </Tabs>
    </Panel>
  </div>
)

LoginPage.propTypes = {
  counter: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

class LoginForm extends React.Component {
  render() {
    const {fields: {email, password}, handleSubmit} = this.props;
    return (
        <div>
          <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col  sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" {...email} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Sign in
            </Button>
          </Col>
        </FormGroup>
        </Form>
      </div>
    )
  }
}

LoginForm =  reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'login',                           // a unique name for this form
  fields: ['email', 'password'] // all the fields in your form
})(LoginForm);


export default LoginPage
