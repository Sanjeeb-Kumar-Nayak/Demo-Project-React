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

  // Submit button styles
  const submitButtonStyle = {
    width: "5rem",
    backgroundColor: "#4aaf51",
    color: "white",
    borderColor: "#4aaf51",
  };

  return (
    <div className="row" style={{ marginTop: "200px" }}>
      <div className="col-sm-4"></div>
      <div className="col-sm-4 col-sm-offset-3">
        <h3
          style={{
            textAlign: "center",
            backgroundColor: "#4aaf51",
            color: "white",
          }}
        >
          SKN PRIVATE
        </h3>
        <Form className="loginForm">
          <Row>
            <div className="d-flex flex-column">
              <Form.Control
                className="newSize"
                size="sm"
                name="email"
                title="Email required!"
                required
                placeholder="Enter your Email Id"
              ></Form.Control>
            </div>
          </Row>
          <Row className="mt-1">
            <div className="d-flex flex-column">
              <Form.Control
                placeholder="Enter your Password"
                className="newSize"
                size="sm"
                name="password"
                title="Password required!"
                required
              ></Form.Control>
            </div>
          </Row>
          <Row className="mt-3 justify-content-center">
            <Button style={submitButtonStyle} onClick={onSubmitFilter}>
              Log In
            </Button>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Login;
