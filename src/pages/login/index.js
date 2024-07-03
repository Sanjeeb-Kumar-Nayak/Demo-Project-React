import React from "react";
import "../login/index.css";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/reducer";
import { LoginHelper } from "../../services/user/user";

const Login = () => {
  const submitButtonStyle = {
    width: "5rem",
    backgroundColor: "#4aaf51",
    color: "white",
    borderColor: "#4aaf51",
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

  const onSubmitLogin = (data) => {
    LoginHelper(JSON.stringify(data))
      .then((response) => {
        if (response && response.status == 1) {
          dispatch(loginUser(data));
          reset();
          navigate("/home");
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
                type="email"
                placeholder="Enter your Email Id"
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
                placeholder="Enter your Password"
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
              onClick={handleSubmit(onSubmitLogin)}
            >
              Log In
            </Button>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Login;
