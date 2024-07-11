import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import sknLogo from "../../assets/images/tree.png";

export const Header = () => {
  const loginButtonStyle = {
    width: "6rem",
    backgroundColor: "white",
    color: "grey",
    borderColor: "gainsboro",
    fontWeight: "800",
    textDecoration: "none",
  };

  const signupButtonStyle = {
    width: "6rem",
    backgroundColor: "white",
    color: "blueviolet",
    borderColor: "gainsboro",
    fontWeight: "800",
    textDecoration: "none",
  };

  return (
    <Row style={{ backgroundColor: "gainsboro" }}>
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
          fontWeight: "1000",
        }}
      >
        Nayak Engineering Private Limited
      </Col>

      <Col
        md={3}
        style={{ textAlign: "right", paddingTop: "15px", paddingRight: "30px" }}
      >
        <Link to={"/"}>
          <Button style={loginButtonStyle}>Log In</Button>
        </Link>

        <Link className="ms-3" to={"/signup"}>
          <Button style={signupButtonStyle}>Sign Up</Button>
        </Link>
      </Col>
    </Row>
  );
};
