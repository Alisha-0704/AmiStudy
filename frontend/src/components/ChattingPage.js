import React, { useState, useEffect } from "react";
import axios from "axios";
import ChatHeader from "./ChatHeader.js";
import "./ChattingPage.css";

const ChattingPage = ({ senderId, receiverId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`/api/chat/${senderId}/${receiverId}`);
        setMessages(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMessages();
  }, [senderId, receiverId]);


   const handleSendMessage = async () => {
    try {
      const response = await axios.post("/api/chat", {
        senderId: senderId,
        receiverId: receiverId,
        message: newMessage,
      });
      setMessages([...messages, response.data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  }
  
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
