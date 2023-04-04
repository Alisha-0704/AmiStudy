import React, { useState } from "react";
import "./Userlogin.css";

function Userlogin() {
  const [studentId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Student ID:", studentId, "Password:", password);
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
      <a href="/signup"> 
        Don't have an account? 
        </a>
    </form>
  );
}

export default Userlogin;
