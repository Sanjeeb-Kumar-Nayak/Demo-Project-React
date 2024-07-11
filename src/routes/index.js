import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import Signup from "../pages/signup";
import SendOtp from "../pages/forgotpassword/sendotp";
import VerifyOtp from "../pages/forgotpassword/verifyotp";
import ResetPassword from "../pages/forgotpassword/resetpassword";
import { Header } from "../components/header";
import { Topbar } from "../components/topbar";

function Routing() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sendotp" element={<SendOtp />} />
          <Route path="/verifyotp" element={<VerifyOtp />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/topbar" element={<Topbar />} />
        </Routes>
      </Router>
    </>
  );
}

export default Routing;
