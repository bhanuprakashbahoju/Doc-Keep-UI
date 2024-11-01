import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.jpg";
const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          {/* Display the logo with a max width */}
          <img
            src={logo}
            alt="Logo"
            style={{ maxWidth: "100%", height: "60vh" }}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col text-center">
          {/* Create a button that redirects to the login page */}
          <Link to="/login" className="btn btn-primary me-2">
            Login
          </Link>
          <Link to="/register" className="btn btn-primary">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
