import React from "react";
import "./index.css";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/reducer";
import { SendOtpHelper } from "../../services/user/user";

const SendOtp = () => {
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
  const dispatch = useDispatch();

  const onClickSendOtp = (data) => {
    console.log(data);
    SendOtpHelper(JSON.stringify(data))
      .then((response) => {
        if (response && response.status == 1) {
          dispatch(loginUser(data));
          reset();
          navigate("/verifyotp");
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
          <Row className="mt-3 justify-content-center">
            <Button
              style={submitButtonStyle}
              onClick={handleSubmit(onClickSendOtp)}
            >
              Send OTP
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

export default SendOtp;
