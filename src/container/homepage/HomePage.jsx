import React, { useState } from 'react';
import "./HomePage.css";
function Homepage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const username = 'User'; // Replace with dynamic username if needed

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: username, text: input }]);
      setInput('');
      // Here you can also send the message to the backend or a chatbot service
    }
  };

  return (
    <div className="chatbot-container">
      <header className="chatbot-header">
        <div className="logo">Chatbot</div>
        <div className="username">{username}</div>
      </header>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.sender}: </strong>
            {msg.text}
          </div>
        ))}
      </div>
      <footer className="chatbot-footer">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </footer>
    </div>
  );
}

export default Homepage;
