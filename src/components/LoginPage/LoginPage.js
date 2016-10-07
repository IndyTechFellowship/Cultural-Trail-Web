import React from 'react'
import classes from './LoginPage.scss'
import {Panel, Tabs, Tab, Form, FormGroup, FormControl, Col, Button,} from 'react-bootstrap'
import {reduxForm, Field} from 'redux-form'
import _ from 'lodash'

export const LoginPage = (props) => (
  <div className={classes.wrapper}>
    <h3>Indianapolis Cultural Trail</h3>
    <div className={classes.tabsContainer}>
      <Tabs defaultActiveKey={1} id="login-register-tabs">
        <Tab eventKey={1} title="Log In">
          <div className={classes.container}>
            <LoginForm loginResponse={props.loginResponse} onSubmit={values => {props.submitLogin(values)}}/>
          </div>
        </Tab>
        <Tab eventKey={2} title="Register">
          <div className={classes.container}>
            <RegisterForm registerResponse={props.registerResponse} onSubmit={values => props.submitRegister(values)}/>
          </div>
        </Tab>
      </Tabs>
    </div>
  </div>
)

LoginPage.propTypes = {
  registerResponse: React.PropTypes.object,
  loginResponse: React.PropTypes.object,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired,
  submitLogin: React.PropTypes.func.isRequired,
  submitRegister: React.PropTypes.func.isRequired
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

class RenderResponse extends React.Component {
  render() {
      const responseExists = !_.isUndefined(this.props.response)
      if(responseExists) {

        const hasEmailError = _.has(this.props.response, 'errors.email')
        const hasError = _.has(this.props.response, 'error')
        const hasData = _.has(this.props.response, 'data')
        if(hasEmailError) {
          return(
            <div>
              That email has already been uses. Try signing in.
            </div>
          )
        } else if(hasData) {
          return(
            <div>
              Please check your inbox for a confirmation email.
            </div>
          )
        } else if(hasError) {
          return(
            <div>
              {this.props.response.error}
            </div>
          )
        }
      } else {
        return(null)
    }
  }
}

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

class LoginForm extends React.Component {
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
          <Col sm={2}>
          </Col>
          <Col sm={10}>
            <RenderResponse response={this.props.loginResponse}/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Button type="button" onClick={handleSubmit} className={classes.btn}>
            Login
          </Button>
        </FormGroup>
      </Form>
    )
  }
}


class RegisterForm extends React.Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <Form horizontal onSubmit={handleSubmit}>
        <FormGroup controlId="formHorizontalName">
          <Col sm={2}>
            Name
          </Col>
          <Col sm={10}>
            <Field name="name" component={renderInput} type="text" />
          </Col>
        </FormGroup>
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
        <FormGroup controlId="formHorizontalPasswordConfirm">
          <Col sm={2}>
            Confirm Password
          </Col>
          <Col sm={10}>
            <Field name="passwordConfirm" component={renderInput} type="password" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={2}>
          </Col>
          <Col sm={10}>
            <RenderResponse response={this.props.registerResponse}/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Button type="button" onClick={handleSubmit} className={classes.btn}>
            Register
          </Button>
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

  if(!values.name) {
    errors.name = 'Required'
  }

  if(!values.passwordConfirm) {
    errors.passwordConfirm = 'Required'
  } else if(values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'password fields must be the same'
  }
  return errors
}

LoginForm = reduxForm({
  form: 'loginForm',
  validate
})(LoginForm)

RegisterForm = reduxForm({
  form: 'registerForm',
  validate
})(RegisterForm)



export default LoginPage
