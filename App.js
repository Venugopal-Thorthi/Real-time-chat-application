
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');

function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('send_message', { message });
    setMessage('');
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setChat((prevChat) => [...prevChat, data.message]);
    });
  }, []);

  return (
    <div style={{ padding: '30px' }}>
      <h2>Real-Time Chat</h2>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message..."
        />
        <button type="submit">Send</button>
      </form>
      <div>
        <h3>Messages:</h3>
        {chat.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
