import axiosInstanceWithoutToken from "../../utilities/axios/axiosConfig";

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