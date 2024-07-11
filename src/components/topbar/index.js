import React from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";

export const Topbar = () => {
  return (
    <div className="topbar">
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
