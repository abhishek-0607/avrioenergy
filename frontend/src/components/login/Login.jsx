import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./login.css";

const Login = () => {
  const { setToken, setLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const initState = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const login = async () => {
    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (res.status === 201) {
      const data = await res.json();
      setToken(data.token);
      setLogin(data);

      console.log("data:", data);
      setUser({ ...initState });
      navigate("/users");
    } else {
      console.log(res);
      const err = await res.json();
      alert(err.message);
    }
  };
  return (
    <div className="login">
      <div className="container">
        <h2>Login</h2>
        <input
          onChange={handleChange}
          type="email"
          className="inputbox"
          placeholder="Enter the Email"
          name="email"
          value={user.email}
        />

        <input
          onChange={handleChange}
          type="password"
          className="inputbox"
          placeholder="Enter the Password"
          name="password"
          value={user.password}
        />
        <button
          className="button"
          onClick={() => {
            console.log(user);
            login();
          }}
        >
          Login
        </button>
        <p>
          If you're a new User then <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
