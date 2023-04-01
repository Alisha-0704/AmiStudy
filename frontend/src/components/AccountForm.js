import React from "react";
import axios from "axios";

import "./AccountForm.css";

function AccountForm() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(
      "First Name:",
      firstName,
      "Last Name:",
      lastName,
      "Email:",
      email,
      "Password:",
      password,
      "Confirm Password:",
      confirmPassword
    );

    try {
      const response = await axios.post("/api/users/register", {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="account-form">
      <h1>CREATE AN ACCOUNT</h1>
      <label htmlFor="first-name">First Name:</label>
      <input
        type="text"
        id="first-name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />

      <label htmlFor="last-name">Last Name:</label>
      <input
        type="text"
        id="last-name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
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

      <label htmlFor="confirm-password">Confirm Password:</label>
      <input
        type="password"
        id="confirm-password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
      />

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default AccountForm;
