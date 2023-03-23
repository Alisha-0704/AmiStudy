// import React, { useState, useEffect, useRef } from 'react';
// import './Chat.css';

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const chatBodyRef = useRef(null);

//   // Add a new message to the chat
//   function addMessage(message, className) {
//     setMessages(prevMessages => [...prevMessages, { message, className }]);
//   }

//   // Handle the input box change
//   function handleInputChange(event) {
//     setInputValue(event.target.value);
//   }

//   // Handle the send button click
//   function handleSendClick() {
//     if (inputValue.trim() === '') {
//       return;
//     }
//     addMessage(inputValue, 'sent');
//     setInputValue('');
//   }

//   // Handle the Enter key press
//   function handleEnterPress(event) {
//     if (event.key === 'Enter') {
//       handleSendClick();
//     }
//   }

//   // Scroll to the bottom of the chat body
//   function scrollToBottom() {
//     chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
//   }

//   // Scroll to the bottom of the chat body on mount and whenever the messages change
//   useEffect(scrollToBottom, [messages]);

//   return (
//     <div className="chat-window">
//       <div className="chat-header">
//         <h2>Chatting with John Doe</h2>
//       </div>
//       <div className="chat-body" ref={chatBodyRef}>
//         {messages.map((msg, index) => (
//           <div key={index} className={`message ${msg.className}`}>
//             <p>{msg.message}</p>
//             <span className="time">{new Date().toLocaleTimeString()}</span>
//           </div>
//         ))}
//       </div>
//       <div className="chat-footer">
//         <input type="text" placeholder="Type your message here" value={inputValue} onChange={handleInputChange} onKeyPress={handleEnterPress} />
//         <button onClick={handleSendClick}>Send</button>
//       </div>
//     </div>
//   );
// }

// export default Chat;

import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import "./ChattingPage.css";

function ChattingPage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    setMessages([...messages, newMessage]);
    setNewMessage("");
  };

  return (
    <div className="chatting-page">
    <ChatHeader/>
      <div className="message-box">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Type your message here"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChattingPage;
