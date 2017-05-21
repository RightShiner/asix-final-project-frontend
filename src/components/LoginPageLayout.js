import React from 'react';
import {Form, FormGroup, Col, FormControl, ControlLabel, Button} from 'react-bootstrap';

const LoginPage = (props) => (
  <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl
        type="email"
        placeholder="Email"
        onChange={(event) => props.onChangeUser(event.target.value)}
        value={props.user}
        />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl
        type="password"
        placeholder="Password"
        onChange={(event) => props.onChangePass(event.target.value)}
        value={props.pass}
        />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button onClick={() => props.setUser(props.user, props.pass)}>
          Sign in
        </Button>
        <Button onClick={() => props.getUser(props.user, props.pass)}>
          Log in
        </Button>
      </Col>
    </FormGroup>
  </Form>
)

export default LoginPage;
