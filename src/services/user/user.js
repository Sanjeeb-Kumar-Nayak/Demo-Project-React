import axiosInstanceWithoutToken from "../../utilities/axios/axiosConfig";

// login handler
export const LoginHelper = async (data) => {
  return await axiosInstanceWithoutToken
    .post("/users/login", data)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
};

// Signup handler
export const SignupHelper = async (data) => {
  return await axiosInstanceWithoutToken
    .post("/users/signup", data)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
};

// forgot password
export const ForgotPasswordHelper = async (data) => {
  return await axiosInstanceWithoutToken
    .post("/users/forgotPassword", data)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
};
