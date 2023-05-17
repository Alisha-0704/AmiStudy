import React, { useState } from "react";
import "./Userlogin.css";
import { useNavigate } from "react-router-dom";

function Userlogin() {
  const navigate = useNavigate();

  const GotoSignUp = () => {
    navigate("/signup");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        navigate("/UserDashBoard");setLoggedIn(true);
      } else {
        setLoggedIn(false);
        setError(
          data.message || "Incorrect username or password. Please try again."
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Main_data">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="d-flex justify-content-center">
          <h1>LOGIN</h1>
        </div>
        <label htmlFor="email-id">Email Id:</label>
        <input
          type="text"
          id="student-id"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Log In</button>
        <div className="text-center mb-3">
          <p>
            Don't have an account?{" "}
            <button type="submit" className="btn btn-link p-0" onClick={GotoSignUp}>
              SignUp
            </button>
          </p>
        </div>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
}

export default Userlogin;
