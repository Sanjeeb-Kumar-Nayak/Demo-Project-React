import axios from "axios";
import baseURL from "../../backend";

const axiosInstanceWithoutToken = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Request-Method": "POST",
    Accept: "application/json",
  },
});

export default axiosInstanceWithoutToken;
