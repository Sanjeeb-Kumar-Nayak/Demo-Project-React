import axiosInstanceWithoutToken from "../../utilities/axios/axiosConfig";

// Signup handler
export const SignupHelper = async (data) => {
  return await axiosInstanceWithoutToken
    .post("/user/createUser", data)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
};

// login handler
export const LoginHelper = async (data) => {
  return await axiosInstanceWithoutToken
    .post("/user/loginUser", data)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
};

// Send OTP handler
export const SendOtpHelper = async (data) => {
  return await axiosInstanceWithoutToken
    .post("/user/sendOtp", data)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
};

// Verify OTP handler
export const VerifyOtpHelper = async (data) => {
  return await axiosInstanceWithoutToken
    .post("/user/verifyOtp", data)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
};

// Reset Password handler
export const ResetPasswordHelper = async (data) => {
  return await axiosInstanceWithoutToken
    .post("/user/resetPassword", data)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
};
