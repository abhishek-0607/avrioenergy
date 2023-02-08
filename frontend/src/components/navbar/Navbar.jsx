import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="logo">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <span className="logoName">Avrio Energy</span>
          </Link>
        </div>
        <div className="menu">
          <Link
            to="/users"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Users
          </Link>
        </div>
        <div className="menu">
          <Link
            to="/buildings"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Buildings
          </Link>
        </div>
        <div className="menu">
          <Link
            to="/register"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Register
          </Link>
        </div>
        <div className="menu">
          <Link
            to="/login"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
