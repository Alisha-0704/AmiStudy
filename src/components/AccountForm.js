import React, { useState } from "react";
import "./AccountForm.css";

function AccountForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    studentId: "",
    Password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  
  return (
    <div className="accountform_main">
      <form className="account-form" onSubmit={handleSubmit}>
        <h1>CREATE ACCOUNT</h1>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="studentId"
          placeholder="Student ID"
          value={formData.studentId}
          onChange={handleInputChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <a href="/dashboard">
        <button type="submit">Create Account</button>
        </a>
      </form>
    </div>
  );
}

export default AccountForm;
