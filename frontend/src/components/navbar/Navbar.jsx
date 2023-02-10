import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./navbar.css";

const Navbar = () => {
  const { login, token, setToken, setLogin } = useContext(AuthContext);

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
          {token ? (
            <div className="login">
              <span>{login.name}</span>
              <button
                onClick={() => {
                  setToken("");
                  setLogin(null);
                }}
              >
                logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
