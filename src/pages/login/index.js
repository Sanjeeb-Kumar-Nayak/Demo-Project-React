import React from "react";
import { Button, Row, Col, Form, Modal, Accordion } from "react-bootstrap";
import { LoginHelper } from "../../services/user/user";
import "../login/index.css";

const Login = () => {
  const onSubmitFilter = (data) => {
    const jsonData = {
      email: "skn.tilu@gmail.com",
      password: "tilu1994",
    };
    LoginHelper(JSON.stringify(jsonData))
      .then((response) => {})
      .catch((error) => {});
  };

  return (
    <>
      <Form>
        <Row>
          <Col>
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text"></Form.Control>
          </Col>
          <Col>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"></Form.Control>
          </Col>
        </Row>
        <Row>
          <Button onClick={onSubmitFilter}>Log In</Button>
        </Row>
      </Form>
    </>
  );
};

export default Login;
