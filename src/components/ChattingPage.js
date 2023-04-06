

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
