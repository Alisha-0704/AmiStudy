import React, { useState } from 'react'; 
import './Userlogin.css'; 
import { useNavigate } from "react-router-dom";

// import axios from 'axios'; 

function Userlogin() {
  const navigate = useNavigate();

  const GotoSignUp = () => {
    navigate("/signup");
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');


  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page from refreshing on form submission
   // console.log('studentId:', studentId, 'Password:', password); // Log the form values to the console
    try {
      // Send a POST request to the server to login the user
      const response = await fetch('http://localhost:3001/login', { 
        method : "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password }), 
    });///api/users/login- is URL path that represents an endpoint on a server.
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      // Login was successful, set loggedIn state to true and clear any error messages
      navigate('/UserDashBoard');
      // setLoggedIn(true);
      // setError('');
    } else {
      // Login failed, set loggedIn state to false and show error message from the server
      setLoggedIn(false);
      setError(data.message || 'Incorrect username or password. Please try again.');
    }
       // Log the success message or error message from the server
    } catch (error) {
      console.log(error); // Log the error message from the server
    }
  };

  return (
    <div className="Main_data">
      <form
      onSubmit={handleSubmit}
      className="login-form"
      >
        <div className='d-flex justify-content-center'>
          <h1 >LOGIN</h1>
        </div>
        <label htmlFor="email-id">Username:</label>
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

        <button type="submit">Log In</button>
        <div className="text-center mb-3">
          <p>Don't have an account? <button className="btn btn-link p-0" onClick={GotoSignUp}>SignUp</button></p>
        </div>
        {error && <div className="error-message">{error}</div>}
      </form>
    
    </div>
  );
}

export default Userlogin;