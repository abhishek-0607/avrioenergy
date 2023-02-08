import React, { useState } from "react";
import "./register.css";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    mobile: "",
    name: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="register">
      <div className="container">
        <h2>Register</h2>
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
          type="text"
          className="inputbox"
          placeholder="Enter the Mobile No."
          name="mobile"
          value={user.mobile}
        />
        <input
          onChange={handleChange}
          type="text"
          className="inputbox"
          placeholder="Enter Your Name"
          name="name"
          value={user.name}
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
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
