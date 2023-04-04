import React, { useState } from "react";
import "./AccountForm.css";

function AccountForm() {
  const [formData, setFormData] = useState({
    Name: "",
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
          name="Name"
          placeholder="Name"
          value={formData.Name}
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
