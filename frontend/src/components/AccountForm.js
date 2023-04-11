import React from "react";
import axios from "axios";

import "./AccountForm.css";

function AccountForm() {
  const [Name, setName] = React.useState("");
  const [collegeId, setcollegeId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [email, setEmail] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(
      "Name:",
      Name,
      "collegeId:",
      collegeId,
      "Password:",
      password,
      "Confirm Password:",
      confirmPassword
    );

    try {
      const response = await axios.post("http://localhost:3001/signup", {
        email,
        password
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="accountform_main">
      <form onSubmit={handleSubmit} className="account-form">
      <h1>CREATE AN ACCOUNT</h1>
      {/* <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={Name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="collegeId">collegeId:</label>
      <input
        type="text"
        id="collegeId"
        value={collegeId}
        onChange={(event) => setcollegeId(event.target.value)}
      /> */}

<label htmlFor="email-id">Email:</label>
        <input
          type="text"
          id="student-id"
          value={email} //this needs to be passed to backend.
          onChange={(event) => setEmail(event.target.value)}
        />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <label htmlFor="confirm-password">Confirm Password:</label>
      <input
        type="password"
        id="confirm-password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
      />

      <button type="submit">Sign Up</button>
    </form>
    </div>
    
  );
}

export default AccountForm;
