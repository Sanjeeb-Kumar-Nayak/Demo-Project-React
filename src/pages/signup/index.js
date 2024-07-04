import React from "react";
import "../signup/index.css";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SignupHelper } from "../../services/user/user";

const Signup = () => {
  const submitButtonStyle = {
    width: "6rem",
    backgroundColor: "#4aaf51",
    color: "white",
    borderColor: "#4aaf51",
  };

  const cancelButtonStyle = {
    width: "6rem",
    backgroundColor: "white",
    color: "#4aaf51",
    borderColor: "#4aaf51",
    marginLeft: "10px",
  };

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({});

  const navigate = useNavigate();

  const onSubmitSignup = (data) => {
    console.log(data);
    SignupHelper(JSON.stringify(data))
      .then((response) => {
        if (response && response.status == 1) {
          reset();
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onClickCancel = () => {
    navigate("/");
  };

  return (
    <div className="row" style={{ marginTop: "150px" }}>
      <div className="col-sm-4"></div>
      <div className="col-sm-3 col-sm-offset-3">
        <h3
          style={{
            textAlign: "center",
            backgroundColor: "#4aaf51",
            color: "white",
          }}
        >
          SKN PRIVATE
        </h3>
        <Form className="signupForm">
          <Row>
            <div className="d-flex flex-column">
              <Form.Control
                className="newSize"
                size="sm"
                name="name"
                type="text"
                placeholder="Enter your name"
                {...register("name", {
                  required: "Name Required!",
                })}
              ></Form.Control>
              {errors.name && (
                <span className="text-danger">{errors.name.message}</span>
              )}
            </div>
          </Row>
          <Row className="mt-1">
            <div className="d-flex flex-column">
              <Form.Control
                className="newSize"
                size="sm"
                name="mobile"
                type="number"
                placeholder="Enter your mobile"
                {...register("mobile", {
                  required: "Mobile Required!",
                })}
              ></Form.Control>
              {errors.mobile && (
                <span className="text-danger">{errors.mobile.message}</span>
              )}
            </div>
          </Row>
          <Row className="mt-1">
            <div className="d-flex flex-column">
              <Form.Control
                className="newSize"
                size="sm"
                name="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email Required!",
                })}
              ></Form.Control>
              {errors.email && (
                <span className="text-danger">{errors.email.message}</span>
              )}
            </div>
          </Row>
          <Row className="mt-1">
            <div className="d-flex flex-column">
              <Form.Control
                size="sm"
                name="password"
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password Required!",
                })}
              ></Form.Control>
              {errors.password && (
                <span className="text-danger">{errors.password.message}</span>
              )}
            </div>
          </Row>
          <Row className="mt-3 justify-content-center">
            <Button
              style={submitButtonStyle}
              onClick={handleSubmit(onSubmitSignup)}
            >
              Sign Up
            </Button>
            <Button style={cancelButtonStyle} onClick={onClickCancel}>
              Cancel
            </Button>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
