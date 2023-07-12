import React from "react";
import { Button, Row, Col, Form, Modal, Accordion } from "react-bootstrap";

const Login = () => {
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
      </Form>
    </>
  );
};

export default Login;
