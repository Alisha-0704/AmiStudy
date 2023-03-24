import React, { useState } from "react";
import "./Userlogin.css";
import axios from "axios";

function Userlogin() {
  const [studentId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Email:", email, "Password:", password);
    try {
      const response = await axios.post('/api/users/login', { email, password });
      console.log(response.data); // Success message or error message from server
    } catch (error) {
      console.log(error.response.data); // Error message from server
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h1>LOGIN</h1>
      <label htmlFor="Student-id">Student ID:</label>
      <input
        type="text"
        id="student-id"
        value={studentId}
        onChange={(event) => setUserId(event.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button type="submit">Log In</button>
      <p>Don't have an account? </p>
    </form>

    
  );
}

export default Userlogin;
