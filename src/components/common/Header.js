import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.jpg";

const Header = () => {
  return (
    <div className="header" style={{ position: "relative" }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              width="40"
              height="40"
              style={{ borderRadius: "20px" }}
              className="mx-5"
            />
          </Link>
          <div className="mx-5" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-2">
              <li className="nav-item mx-5">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-5">
                <Link className="nav-link" to="/features">
                  Features
                </Link>
              </li>
              <li className="nav-item mx-5">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item mx-5">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
