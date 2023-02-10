import React, { useState } from "react";
import "./register.css";

const Register = () => {
  const initState = {
    email: "",
    number: "",
    name: "",
    password: "",
  };
  const [user, setUser] = useState(initState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const register = async () => {
    const res = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log(res);
    const data = await res.json();
    console.log("data:", data);
    setUser({ ...initState });
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
          name="number"
          value={user.number}
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
            register();
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
