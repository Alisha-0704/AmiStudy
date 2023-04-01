import React, { useState } from 'react';
import './SimpleComponent.css';

const SimpleComponent = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Hello, this is a simple React component!');
  };

  return (
    <div className="simple-container">
      <button className="simple-button" onClick={handleClick}>
        Click me!
      </button>
      {message && <p className="simple-message">{message}</p>}
    </div>
  );
};

export default SimpleComponent;