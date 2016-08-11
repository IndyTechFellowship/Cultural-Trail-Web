import React from 'react'
import classes from './LoginPage.scss'
import {Panel, Tabs, Tab, Form, FormGroup, FormControl, Col, Button,} from 'react-bootstrap'
import {reduxForm, Field} from 'redux-form';

export const LoginPage = (props) => (
  <div>
    <Panel>
      <Tabs defaultActiveKey={1} id="login-register-tabs">
        <Tab eventKey={1} title="Log In">
          <div>
            <MyForm onSubmit={values => {props.submitLogin(values)}}/>
          </div>
        </Tab>
        <Tab eventKey={2} title="Register">Register</Tab>
      </Tabs>
    </Panel>
  </div>
)

LoginPage.propTypes = {
  counter: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired,
  submitLogin: React.PropTypes.func.isRequired
}
/*
const renderInput = (props) => (
  <div>
    <input {...props}/>
    {props.touched &&
     props.error &&
     <span className="error">{props.error}</span>}
  </div>
)
*/

class renderInput extends React.Component {
  render() {
    return (
      <div>
        <FormControl {...this.props.input} type={this.props.type}/>
        {this.props.meta.touched &&
         this.props.meta.error &&
         <span className="error">{this.props.meta.error}</span>}
      </div>
    )
  }
}

class MyForm extends React.Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <Form horizontal onSubmit={handleSubmit}>
        <FormGroup controlId="formHorizontalEmail">
          <Col sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <Field name="email" component={renderInput} type="text" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <Field name="password" component={renderInput} type="password" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="button" onClick={handleSubmit}>
              Login
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if(!values.password) {
    errors.password = 'Required'
  } else if(values.password.length < 5) {
    errors.password = 'must me more then 5 characters'
  }
  return errors
}

MyForm = reduxForm({
  form: 'myForm',
  validate
})(MyForm)



export default LoginPage
