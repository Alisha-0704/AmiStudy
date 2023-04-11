import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import "./ChattingPage.css";

function ChattingPage() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleFileInputChange = (event) => {
    setSelectedFiles(event.target.files);
  };
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    setMessages([...messages, newMessage]);
    setNewMessage("");
  };

  return (
    <div className="chatting-page">
      <ChatHeader />
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
        {/* <div className="file-upload">
          <input
            className="file-upload__input"
            type="file"
            name="myFile[]"
            id="myFile"
            multiple
            onChange={handleFileInputChange}
          />
          <button className="file-upload__button" type="button">
            Choose File(s)
          </button>
          <span className="file-upload__label">
            {selectedFiles.length
              ? Array.from(selectedFiles)
                  .map((file) => file.name)
                  .join(", ")
              : "No file(s) selected"}
          </span>
        </div> */}
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChattingPage;
