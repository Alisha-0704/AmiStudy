import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Sign() {
  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    const response = await fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const message = await response.text();
      console.log(message);
      setSignedIn(true);
      setError('');
    } else {
      const errorMessage = await response.text();
      console.error(errorMessage);
      
    }
}catch (error) {
        console.error(error);
        setError('Invalid credentials');
      }
  }

  return (
    <div>
              {signedIn ? (
                <form>
        <h1>Signed up successfully</h1>
        <button onClick={gotoLogin}>Login</button>

        </form>
      ) : (
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <button type="submit">Sign up</button>
        <button onClick={gotoLogin}>Login</button>

      </form>
      )}
    </div>
  );
}