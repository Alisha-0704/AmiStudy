import React, { useState } from 'react'; 
import './Userlogin.css'; 
import axios from 'axios'; 

function Userlogin() {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page from refreshing on form submission
    console.log('studentId:', studentId, 'Password:', password); // Log the form values to the console
    try {
      // Send a POST request to the server to login the user
      const response = await axios.post('http://localhost:8000/api/users/login', { studentId, password }); ///api/users/login- is URL path that represents an endpoint on a server.
      console.log(response.data); // Log the success message or error message from the server
    } catch (error) {
      console.log(error.response.data); // Log the error message from the server
    }
  };

  return (
    <form
    onSubmit={handleSubmit}
    className="login-form"
    >
      <h1>LOGIN</h1>
      <label htmlFor="Student-id">Student ID:</label>
      <input
        type="text"
        id="student-id"
        value={studentId} //this needs to be passed to backend.
        onChange={(event) => setStudentId(event.target.value)}
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