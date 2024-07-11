import React from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import sknLogo from "../../assets/images/sknLogo.jpg";

export const Header = () => {
  const loginButtonStyle = {
    width: "6rem",
    backgroundColor: "wheat",
    color: "Black",
    borderColor: "wheat",
  };

  const signupButtonStyle = {
    width: "6rem",
    backgroundColor: "#4aaf51",
    color: "white",
    borderColor: "#4aaf51",
  };

  return (
    <Row className="header">
      <Col md={2}>
        <img src={sknLogo} height={"35px"} width={"50px"} />
      </Col>
      <Col
        md={7}
        style={{ textAlign: "center", fontSize: "25px", color: "wheat" }}
      >
        SKN PRIVATE LIMITED
      </Col>
      <Col md={3} style={{ textAlign: "right" }}>
        <Button style={loginButtonStyle}>Log In</Button>
        <Button className="ms-3" style={signupButtonStyle}>
          Sign Up
        </Button>
      </Col>
    </Row>
  );
};
