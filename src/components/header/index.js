import React from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import sknLogo from "../../assets/images/tree.png";

export const Header = () => {
  const loginButtonStyle = {
    width: "6rem",
    backgroundColor: "white",
    color: "grey",
    borderColor: "rgb(220, 241, 241)",
    fontWeight: "800"
  };

  const signupButtonStyle = {
    width: "6rem",
    backgroundColor: "white",
    color: "blueviolet",
    borderColor: "rgb(220, 241, 241)",
    fontWeight: "800"
  };

  return (
    <Row className="header">
      <Col md={2} style={{ textAlign: "center" }}>
        <img src={sknLogo} height={"70px"} width={"70px"} />
      </Col>
      <Col
        md={7}
        style={{
          textAlign: "center",
          paddingTop: "15px",
          fontSize: "25px",
          color: "green",
          fontWeight: "1000"
        }}
      >
        Nayak Engineering Private Limited
      </Col>
      <Col
        md={3}
        style={{ textAlign: "right", paddingTop: "15px", paddingRight: "30px" }}
      >
        <Button style={loginButtonStyle}>Log In</Button>
        <Button className="ms-3" style={signupButtonStyle}>
          Sign Up
        </Button>
      </Col>
    </Row>
  );
};
