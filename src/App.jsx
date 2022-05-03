import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://127.0.0.1:4001';
function App() {
  const [res, setRes] = useState('');

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('FromBackend', (data) => {
      setRes(data);
    });
  }, []);

  return <p>{res}</p>;
}

export default App;
