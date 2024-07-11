import React from "react";
import "./index.css";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ResetPasswordHelper } from "../../services/user/user";

const ResetPassword = () => {
  const submitButtonStyle = {
    width: "7rem",
    backgroundColor: "#4aaf51",
    color: "white",
    borderColor: "#4aaf51",
  };

  const cancelButtonStyle = {
    width: "7rem",
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
  const store = useSelector((state) => state.login[0]);

  const onSubmitPassword = (data) => {
    console.log(data);
    console.log(data);
    const jsonData = {
      email: store.email,
      newPassword: data.newPassword,
      confirmPassword: data.confirmPassword,
    };

    ResetPasswordHelper(JSON.stringify(jsonData))
      .then((response) => {
        if (response && response.status == 1) {
          reset();
          navigate("/home");
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
    <div className="row" style={{ marginTop: "200px" }}>
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
        <Form className="loginForm">
          <Row>
            <div className="d-flex flex-column">
              <Form.Control
                className="newSize"
                size="sm"
                name="newPassword"
                type="password"
                placeholder="Enter new password"
                {...register("newPassword", {
                  required: "New Password Required!",
                })}
              ></Form.Control>
              {errors.newPassword && (
                <span className="text-danger">
                  {errors.newPassword.message}
                </span>
              )}
            </div>
          </Row>
          <Row className="mt-1">
            <div className="d-flex flex-column">
              <Form.Control
                size="sm"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required: "Confirm Password Required!",
                })}
              ></Form.Control>
              {errors.confirmPassword && (
                <span className="text-danger">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
          </Row>
          <Row className="mt-3 justify-content-center">
            <Button
              style={submitButtonStyle}
              onClick={handleSubmit(onSubmitPassword)}
            >
              Submit
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

export default ResetPassword;
